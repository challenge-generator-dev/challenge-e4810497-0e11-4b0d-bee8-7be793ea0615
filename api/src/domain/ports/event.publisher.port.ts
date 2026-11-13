import { Observable } from 'rxjs';

export interface EventPublisherPort {
  publish<T>(topic: string, event: T): Promise<void>;
  subscribe<T>(topic: string): Observable<T>;
}