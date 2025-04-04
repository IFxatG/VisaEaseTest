// Temporary mock for FigmaAPI
class FigmaAPIMock {
  constructor(config: { accessToken: string, fileKey: string }) {
    console.log('FigmaAPI initialized with mock', config);
  }

  async getNode(nodeId: string) {
    console.log(`Mock getting node: ${nodeId}`);
    return {
      id: nodeId,
      name: nodeId,
      styles: {
        container: {
          backgroundColor: '#FFFFFF',
        },
        content: {
          padding: 20,
        },
        title: {
          fontSize: 32,
          fontWeight: 'bold',
          color: '#007AFF',
          margin: 8,
        },
        subtitle: {
          fontSize: 16,
          color: '#666666',
          margin: 32,
        },
        input: {
          backgroundColor: '#F5F5F5',
          borderRadius: 10,
          padding: 16,
          fontSize: 16,
        },
        loginButton: {
          backgroundColor: '#007AFF',
          borderRadius: 10,
          padding: 16,
          margin: 8,
        },
        loginButtonText: {
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: 'bold',
        }
      }
    };
  }
}

const FIGMA_ACCESS_TOKEN = 'YOUR_FIGMA_ACCESS_TOKEN';
const FIGMA_FILE_KEY = 'YOUR_FIGMA_FILE_KEY';

// Sử dụng FigmaAPIMock thay vì FigmaAPI
export const figmaAPI = new FigmaAPIMock({
  accessToken: FIGMA_ACCESS_TOKEN,
  fileKey: FIGMA_FILE_KEY,
});

export const FIGMA_NODES = {
  LOGIN_SCREEN: 'login-screen',
  HOME_SCREEN: 'home-screen',
  SCAN_SCREEN: 'scan-screen',
  REVIEW_SCREEN: 'review-screen',
  RESULT_SCREEN: 'result-screen',
  DASHBOARD_SCREEN: 'dashboard-screen',
  NEWS_SCREEN: 'news-screen',
  MAP_SCREEN: 'map-screen',
}; 