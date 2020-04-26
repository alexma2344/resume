import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';
import { SafariDateFormatterPipe } from './pipe/safari-date-formatter.pipe';
import { LocalizedDatePipe } from './pipe/localized-date.pipe';

@NgModule({
    imports: [ HttpClientModule ],
    declarations: [ SafariDateFormatterPipe, LocalizedDatePipe ],
    providers: [ DataService, SorterService ],
    exports: [ SafariDateFormatterPipe, LocalizedDatePipe ]
})

export class CoreModule { }