import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../Components/header/header';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, Header, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
