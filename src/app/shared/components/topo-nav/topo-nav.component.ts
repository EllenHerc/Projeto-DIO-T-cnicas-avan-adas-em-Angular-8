import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-topo-nav',
  templateUrl: './topo-nav.component.html',
  styleUrls: ['./topo-nav.component.scss']
})
export class TopoNavComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon('git', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/git_icon.svg'));
  }

  ngOnInit(): void {
  }

}
