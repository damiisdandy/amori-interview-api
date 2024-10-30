## Amori Interview API 

### Description
This is a simple API that returns a fixed response for the Amori Interview. 

### Usage
To run the API, simply run `npm start` in the root directory of the project.

### Endpoints 
The API has a single endpoint: `/api/v1/analysis`.  

### Response
The response is a JSON object with the following structure:

```typescript
type ApiResponse = {
  status: "success" | "error";
  data: {
    results: {
      score: number;
      description: string;
    };
    strength: {
      snippet: {
        header: string;
        messages: Array<{
          sender: string;
          content: string;
        }>;
        footer: string;
      };
    };
    "rizz-score": number;
  };
};
```