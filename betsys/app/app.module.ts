import { NgModule }      						from '@angular/core';
import { BrowserModule } 						from '@angular/platform-browser';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy, Http}          from '@angular/http';
import { FormsModule }							from '@angular/forms';
import { DndModule } 							  from 'ng2-dnd';
import { Ng2Bs3ModalModule } 				from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent }   					from './components/app.component';
import { AppRouterModule }					from './app-router.module';
import { HeaderComponent } 					from './components/header.component';
import { BetComponent } 					  from './components/bet/bet.component';
import { NewBoardComponent } 				from './components/bet/newboard.component';
import { BetService, BetXHRService } 							from './services/bet.service';

import { ListToObjectTransform, ObjectToArrayTransform, 
         ReturnTextColorRelativeToBackground, ArrayShuffle } 				from './pipes/bet.pipes';

@NgModule({
  	imports:      [
					BrowserModule,
					FormsModule,
					AppRouterModule,
        	HttpModule,
					DndModule.forRoot(),
					Ng2Bs3ModalModule,
		],
  	declarations: [
	  			AppComponent,
	  			HeaderComponent,
        	BetComponent,
        	NewBoardComponent,
          ListToObjectTransform,
        	ObjectToArrayTransform,
          ReturnTextColorRelativeToBackground,
          ArrayShuffle
  		],
  	providers: [ BetService, 
                 BetXHRService, {
                  provide: XSRFStrategy,
                  useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
              }],	
  	bootstrap: [ AppComponent ]
})

export class AppModule {}
