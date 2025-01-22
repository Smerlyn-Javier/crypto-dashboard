import { Component } from '@angular/core';
import { CryptoService } from './crypto.service';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  lineData: any;
  barData: any;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getCryptoData().subscribe((data) => {
      const labels = data.map((item: any) => item.criptomoneda);
      const prices = data.map((item: any) => item.precio);

      // Configuración para el gráfico de línea
      this.lineData = {
        labels,
        datasets: [
          {
            label: 'Precios de Criptomonedas',
            data: prices,
            fill: false,
            borderColor: '#42A5F5',
            tension: 0.4,
          },
        ],
      };

      // Configuración para el gráfico de barras
      this.barData = {
        labels,
        datasets: [
          {
            label: 'Precios de Criptomonedas',
            data: prices,
            backgroundColor: '#FFA726',
          },
        ],
      };
    });
  }
}
