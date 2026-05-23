import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../Components/header/header';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, Header, Footer],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}
