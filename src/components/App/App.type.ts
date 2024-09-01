export interface Image {
        id: string;
        urls: {
          regular: string;
          small: string;
        };
        likes: number;
        alt_description: string;
      }
