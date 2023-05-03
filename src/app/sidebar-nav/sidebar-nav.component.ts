import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit {
  @Output()  onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  selectedItem='';
  
  ngOnInit(): void {
    this.screenWidth = window. innerWidth;
    }

  toggleCollapse():void{
    if (this.collapsed) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth: this.screenWidth});
    } else {
      this.collapsed = true;
      this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth: this.screenWidth});
    }
  }
onItemClick(item: string) {
  this.selectedItem = item;
}

}
