import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../Components/footer/footer';
import { Header } from '../../Components/header/header';

@Component({
  selector: 'app-services',
  imports: [RouterLink, Footer, Header],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {}
