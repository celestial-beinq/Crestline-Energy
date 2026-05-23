import { Component } from '@angular/core';
import { Header } from '../../Components/header/header';
import { Footer } from '../../Components/footer/footer';
import { Counters } from '../../Components/counters/counters';
import { Faqs } from '../../Components/faqs/faqs';

@Component({
  selector: 'app-about',
  imports: [Header, Footer, Counters, Faqs ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
