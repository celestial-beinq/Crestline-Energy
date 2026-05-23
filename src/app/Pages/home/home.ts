import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../Components/header/header';
import { Hero } from '../../Components/hero/hero';
import { Section1 } from '../../Components/section-1/section-1';
import { ScrollSection } from '../../Components/scroll-section/scroll-section';
import { Section2 } from '../../Components/section-2/section-2';
import { ImageAccordion } from '../../Components/image-accordion/image-accordion';
import { Newsletter } from '../../Components/newsletter/newsletter';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Header, Hero, Footer, Section1, ScrollSection, Section2, ImageAccordion, Newsletter ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
