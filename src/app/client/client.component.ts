import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  template: `<p>client works!</p>`,
  styleUrl: './client.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClientComponent { }
