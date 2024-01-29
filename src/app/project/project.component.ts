import { Projet } from './../interfaces/projet.interface';
import { Component } from '@angular/core';
import { project } from './mockup-project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projet = project;
}
