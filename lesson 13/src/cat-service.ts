import { ImageDto } from './models/image.dto';

export class CatService {
    public constructor(private baseUrl: string, private apiKey?: string) {}

    public async getCatsImages(): Promise<ImageDto[]> {
        const headers: Record<string, string> = {
            'accept': 'application/json'
        };

        if (this.apiKey) {
            headers['x-api-key'] = this.apiKey;
        }

        const response = await fetch(`${this.baseUrl}/images`, { headers });
        const responseJson = await response.json();

        return responseJson;
    }

    public async voteCatImage(imageId: string, value: 0 | 1): Promise<{ id: number; message: string }> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        };

        if (this.apiKey) {
            headers['x-api-key'] = this.apiKey;
        }

        const response = await fetch(`${this.baseUrl}/votes`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                image_id: imageId,
                value: value,
                sub_id: 'test-user'
            })
        });

        return response.json();
    }

    public async favouriteCatImage(imageId: string): Promise<{ id: number; message: string }> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        };

        if (this.apiKey) {
            headers['x-api-key'] = this.apiKey;
        }

        const response = await fetch(`${this.baseUrl}/favourites`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                image_id: imageId,
                sub_id: 'test-user'
            })
        });

        return response.json();
    }

    public async getFavourites(): Promise<Array<{ id: number; image_id: string; created_at: string }>> {
        const headers: Record<string, string> = {
            'accept': 'application/json'
        };

        if (this.apiKey) {
            headers['x-api-key'] = this.apiKey;
        }

        const response = await fetch(`${this.baseUrl}/favourites`, { headers });
        const responseJson = await response.json();

        return responseJson;
    }

    public async getVotes(): Promise<Array<{ id: number; image_id: string; value: number; created_at: string }>> {
        const headers: Record<string, string> = {
            'accept': 'application/json'
        };

        if (this.apiKey) {
            headers['x-api-key'] = this.apiKey;
        }

        const response = await fetch(`${this.baseUrl}/votes`, { headers });
        const responseJson = await response.json();

        return responseJson;
    }
}
