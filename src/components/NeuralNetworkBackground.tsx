import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  layer: number; // 0=back, 1=mid, 2=front
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface DataPulse {
  connectionIdx: number;
  progress: number; // 0-1
  speed: number;
  color: string;
}

const COLORS = {
  purple: [107, 70, 193] as [number, number, number],
  blue: [66, 153, 225] as [number, number, number],
};

const NeuralNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const pulsesRef = useRef<DataPulse[]>([]);
  const initRef = useRef(false);
  const lastPulseTime = useRef(0);

  const initNetwork = useCallback((w: number, h: number) => {
    const isMobile = w < 768;
    const spacing = isMobile ? 90 : 60;
    const cols = Math.ceil(w / spacing) + 1;
    const rows = Math.ceil(h / spacing) + 1;
    const nodes: Node[] = [];
    const connections: Connection[] = [];

    // Create nodes with jitter
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const layer = Math.random();
        const l = layer < 0.3 ? 0 : layer < 0.7 ? 1 : 2;
        const jitterX = (Math.random() - 0.5) * spacing * 0.6;
        const jitterY = (Math.random() - 0.5) * spacing * 0.6;
        nodes.push({
          x: c * spacing + jitterX,
          y: r * spacing + jitterY,
          size: l === 0 ? 1 : l === 1 ? 1.5 : 2.2,
          opacity: l === 0 ? 0.2 : l === 1 ? 0.4 : 0.7,
          color: Math.random() > 0.5 ? "purple" : "blue",
          layer: l,
        });
      }
    }

    // Connect nearby nodes
    const maxDist = isMobile ? spacing * 1.8 : spacing * 1.6;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          connections.push({
            from: i,
            to: j,
            opacity: 0.15 + Math.random() * 0.1,
            pulsePhase: Math.random() * Math.PI * 2,
            pulseSpeed: 0.3 + Math.random() * 0.4,
          });
        }
      }
    }

    nodesRef.current = nodes;
    connectionsRef.current = connections;
    pulsesRef.current = [];
    lastPulseTime.current = 0;
    initRef.current = true;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let w = 0, h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNetwork(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      const t = time * 0.001;
      const nodes = nodesRef.current;
      const connections = connectionsRef.current;
      const pulses = pulsesRef.current;

      // Background
      ctx.fillStyle = "#0a0a0f";
      ctx.fillRect(0, 0, w, h);

      // Purple gradient overlay
      const grd = ctx.createRadialGradient(w * 0.65, h * 0.4, 0, w * 0.65, h * 0.4, Math.max(w, h) * 0.7);
      grd.addColorStop(0, "rgba(107, 70, 193, 0.10)");
      grd.addColorStop(1, "rgba(107, 70, 193, 0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // Draw connections by layer
      for (const conn of connections) {
        const a = nodes[conn.from];
        const b = nodes[conn.to];
        const pulse = 0.2 + 0.2 * Math.sin(t * conn.pulseSpeed + conn.pulsePhase);
        const layerOpacity = Math.min(a.opacity, b.opacity);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(107, 70, 193, ${pulse * layerOpacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Data pulses
      if (t - lastPulseTime.current > 2.5 + Math.random() * 2 && connections.length > 0) {
        lastPulseTime.current = t;
        const count = Math.random() > 0.5 ? 2 : 1;
        for (let i = 0; i < count; i++) {
          const idx = Math.floor(Math.random() * connections.length);
          pulses.push({
            connectionIdx: idx,
            progress: 0,
            speed: 0.25 + Math.random() * 0.2,
            color: Math.random() > 0.4 ? "purple" : "blue",
          });
        }
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed * 0.016;
        if (p.progress > 1) {
          pulses.splice(i, 1);
          continue;
        }
        const conn = connections[p.connectionIdx];
        const a = nodes[conn.from];
        const b = nodes[conn.to];
        const px = a.x + (b.x - a.x) * p.progress;
        const py = a.y + (b.y - a.y) * p.progress;
        const c = COLORS[p.color as keyof typeof COLORS];
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 12);
        grad.addColorStop(0, `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.8)`);
        grad.addColorStop(1, `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(px - 12, py - 12, 24, 24);
      }

      // Draw nodes
      for (const node of nodes) {
        const c = COLORS[node.color as keyof typeof COLORS];
        const glowSize = node.size * 3;
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize);
        grad.addColorStop(0, `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${node.opacity * 0.8})`);
        grad.addColorStop(1, `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(node.x - glowSize, node.y - glowSize, glowSize * 2, glowSize * 2);

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${node.opacity})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [initNetwork]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
};

export default NeuralNetworkBackground;
