import { HttpClient } from '@angular/common/http';

export class CustomHttpClient extends HttpClient {
    public static serverUrl: String = "http://localhost:8000";
    
}
