
import { v4 as uuidv4 } from 'uuid';

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

const countWordFrequency = (text: string): { [key: string]: number } => {
    const words = text.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(word => word.length > 3); // Filter out small words

    const frequency: { [key: string]: number } = {};
    words.forEach(word => {
        frequency[word] = (frequency[word] || 0) + 1;
    });

    return frequency;
};

const extractKeyPhrases = (text: string): string[] => {
    // Split text into sentences
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    // Find sentences that might contain key concepts (e.g., containing important words)
    const keyPhrases = sentences
        .map(s => s.trim())
        .filter(s => s.length > 30 && s.length < 100) // Filter for reasonable length
        .slice(0, 5); // Take top 5 phrases

    return keyPhrases;
};

const categorizeContent = (text: string): { [key: string]: number } => {
    const categories = {
        'Technical': (text.match(/\b(code|programming|software|data|algorithm)\b/gi) || []).length,
        'Business': (text.match(/\b(business|market|strategy|customer|profit)\b/gi) || []).length,
        'Academic': (text.match(/\b(research|study|analysis|theory|hypothesis)\b/gi) || []).length
    };
    
    return categories;
};

export const analyzeText = (text: string) => {
    // Get word frequency for word cloud
    const wordFrequency = countWordFrequency(text);
    const wordCloudData = Object.entries(wordFrequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20)
        .map(([text, value]) => ({ text, value }));

    // Get categories for chart
    const categories = categorizeContent(text);
    const chartData = {
        labels: Object.keys(categories),
        datasets: [{
            label: 'Content Distribution',
            data: Object.values(categories),
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)'
            ]
        }]
    };

    // Get key phrases for mind map
    const keyPhrases = extractKeyPhrases(text);
    const mindMapData = {
        nodes: [
            { id: 1, label: 'Main Content' },
            ...keyPhrases.map((phrase, index) => ({
                id: index + 2,
                label: phrase.length > 20 ? phrase.substring(0, 20) + '...' : phrase
            }))
        ],
        edges: keyPhrases.map((_, index) => ({
            source: 1,
            target: index + 2
        }))
    };

    return {
        wordCloud: wordCloudData,
        chart: chartData,
        mindMap: mindMapData
    };
};
