import { useState, useEffect } from 'react';
import { figmaAPI, FIGMA_NODES } from '../config/figma';

interface FigmaNode {
  id: string;
  name: string;
  styles: {
    [key: string]: {
      color?: string;
      fontSize?: number;
      fontWeight?: number;
      backgroundColor?: string;
      borderRadius?: number;
      padding?: number;
      margin?: number;
    };
  };
  children?: FigmaNode[];
}

export const useFigma = (nodeId: string) => {
  const [data, setData] = useState<FigmaNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFigmaData = async () => {
      try {
        setLoading(true);
        const nodeData = await figmaAPI.getNode(nodeId);
        setData(nodeData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchFigmaData();
  }, [nodeId]);

  return { data, loading, error };
}; 