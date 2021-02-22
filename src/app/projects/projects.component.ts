import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = [
    {projectName:"Smart security App",projectDetails:"IOT systems", Department:"IT", logo: "https://images.unsplash.com/photo-1514803400321-3ca29fc47334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"},
    {projectName:"Payment and Hiring",projectDetails:"Payment and hiring", Department:"HR",logo:"https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
    {projectName:"Marketing",projectDetails:"Pointing to the right people", Department:"Marketing",logo:"https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"},
    {projectName:"Asembling",projectDetails:"soldering component", Department:"Engineering",logo:"https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"},
    {projectName:"advertising",projectDetails:"selling the product", Department:"Sales",logo:"https://images.unsplash.com/photo-1529218402470-5dec8fea0761?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=778&q=80"},
    {projectName:"Web app",projectDetails:"", Department:"Software dev",logo:"https://images.unsplash.com/photo-1599687265846-1ead869a1971?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"},
    {projectName:"advertising",projectDetails:"flyers", Department:"Priting",logo:"https://images.unsplash.com/photo-1558174685-430919a96c8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"}
  ]
}
