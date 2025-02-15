
import { v4 as uuidv4 } from 'uuid';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const generateFileId = () => {
    return uuidv4();
};

export const extractTextFromFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = async (event) => {
            try {
                const text = event.target?.result as string;
                resolve(text);
            } catch (error) {
                reject(new Error('Failed to read file content'));
            }
        };
        
        reader.onerror = () => {
            reject(new Error('Failed to read file'));
        };
        
        reader.readAsText(file);
    });
};

export const analyzeText = async (text: string) => {
    try {
        // Call the Supabase Edge Function for AI analysis
        const { data, error } = await supabase.functions.invoke('analyze-content', {
            body: { text }
        });

        if (error) throw error;

        // Format the AI analysis results for visualization
        return {
            wordCloud: data.keywords,
            chart: {
                labels: Object.keys(data.categories),
                datasets: [{
                    label: 'Content Distribution',
                    data: Object.values(data.categories),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)'
                    ]
                }]
            },
            mindMap: {
                nodes: [
                    { id: 1, label: 'Main Content' },
                    ...data.keyPhrases.map((phrase: string, index: number) => ({
                        id: index + 2,
                        label: phrase.length > 20 ? phrase.substring(0, 20) + '...' : phrase
                    }))
                ],
                edges: data.keyPhrases.map((_: string, index: number) => ({
                    source: 1,
                    target: index + 2
                }))
            }
        };
    } catch (error) {
        console.error('Error in AI analysis:', error);
        throw error;
    }
};
