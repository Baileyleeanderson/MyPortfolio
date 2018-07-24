import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  resumeGif: string;
  projectsGif: string;
  educationGif: string;
  aboutmeGif: string;
  gifs: string;
  matrix: boolean;
  bggif: string;
  trackingpics: string;
  showtrackpic: boolean;
  maincomp: boolean;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}
  ngOnInit(){
    this.maincomp = true;
    this.resumeGif = "assets/images/resume.gif";
    this.projectsGif = "assets/images/projects.gif";
    this.educationGif ="assets/images/education.gif";
    this.aboutmeGif ="assets/images/aboutme.gif";
    this.gifs = "assets/images/mranderson.gif";
    this.matrix = false;
    this.bggif = "./../assets/images/giphyblue.gif";
    this.trackingpics = "./../assets/images/screen3.gif"
    this.showtrackpic = true;
  }

  resume(){
    this.maincomp = true;
    this.bggif = "";
    this.bggif = "./../assets/images/giphyblue.gif";
    this.resumeGif = "assets/images/resumehover.gif";
    this.projectsGif = "assets/images/projects.gif";
    this.educationGif ="assets/images/education.gif";
    this.aboutmeGif ="assets/images/aboutme.gif";
    this._router.navigate(['resume']);
    this.gifs = "assets/images/grad.gif";
    this.showtrackpic = true;
    this.trackingpics = "./../assets/images/screen2.gif"
    this.matrix = false;
  }
  projects(){
    this.maincomp = true;
    this.projectsGif = "assets/images/projectshover.gif";
    this.resumeGif = "assets/images/resume.gif";
    this.educationGif ="assets/images/education.gif";
    this.aboutmeGif ="assets/images/aboutme.gif";
    this._router.navigate(['projects']);
    this.gifs = "assets/images/pro1.gif";
    this.showtrackpic = true;
    this.trackingpics = "./../assets/images/screen1.gif";
    this.matrix = false;
  }
  education(){
    this.maincomp = true;
    this.educationGif ="assets/images/educationhover.gif";
    this.resumeGif = "assets/images/resume.gif";
    this.projectsGif = "assets/images/projects.gif";
    this.aboutmeGif ="assets/images/aboutme.gif";
    this._router.navigate(['education']);
    this.gifs = "assets/images/mrandersoned.gif";
    this.showtrackpic = true;
    this.trackingpics = "./../assets/images/screen2.gif"
    this.matrix = false;
  }
  aboutme(){
    this.maincomp = true;
    this._router.navigate(['aboutme']);
    this.aboutmeGif ="assets/images/aboutmehover.gif";
    this.resumeGif = "assets/images/resume.gif";
    this.projectsGif = "assets/images/projects.gif";
    this.educationGif ="assets/images/education.gif";
    this.gifs = "assets/images/mrandersonalgos.gif";
    this.trackingpics = "./../assets/images/screen1.gif";
    this.showtrackpic = true;
    this.matrix = true;
  }
  home(){
    this.maincomp = true;
    this._router.navigate(['']);
    this.resumeGif = "assets/images/resume.gif";
    this.projectsGif = "assets/images/projects.gif";
    this.educationGif ="assets/images/education.gif";
    this.aboutmeGif ="assets/images/aboutme.gif";
    this.gifs = "assets/images/mranderson.gif";
    this.showtrackpic = true;
    this.trackingpics = "./../assets/images/screen3.gif"
    this.matrix = false;
  }
}
