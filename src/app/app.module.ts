import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { AsyncComponent } from './async/async.component';
import { ListComponent } from './observables/list/list.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { CommonService } from './common.service';
import { IntervalComponent } from './observables/interval/interval.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { CustomObservablesComponent } from './observables/custom-observables/custom-observables.component';
import { MapComponent } from './observables/map/map.component';
import { PluckComponent } from './observables/pluck/pluck.component';
import { FilterComponent } from './observables/filter/filter.component';
import { TapComponent } from './observables/tap/tap.component';
import { RetryComponent } from './observables/retry/retry.component';
import { DebounceComponent } from './observables/debounce/debounce.component';
import { SubjectComponent } from './observables/subject/subject.component';
import { HeaderComponent } from './header/header.component';
import { Comp1Component } from './testComp/comp1/comp1.component';
import { Comp2Component } from './testComp/comp2/comp2.component';
import { Comp3Component } from './testComp/comp3/comp3.component';
import { ReplaySubjectComponent } from './observables/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observables/async-subject/async-subject.component';
import { SwitchMapComponent } from './observables/switch-map/switch-map.component';
import { MergeMapComponent } from './observables/merge-map/merge-map.component';
import { ConcatMapComponent } from './observables/concat-map/concat-map.component';
import { ThrottleTimeComponent } from './observables/throttle-time/throttle-time.component';
import { StartWithComponent } from './observables/start-with/start-with.component';
import { CombineLatestComponent } from './observables/combine-latest/combine-latest.component';
import { CatchErrorComponent } from './observables/catch-error/catch-error.component';
import { ZipComponent } from './observables/zip/zip.component';
import { FirstLastComponent } from './observables/first-last/first-last.component';
import { DistinctComponent } from './observables/distinct/distinct.component';
import { MergeComponent } from './observables/merge/merge.component';
import { BehaviorSubjectComponent } from './observables/behavior-subject/behavior-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObservablesComponent,
    AsyncComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservablesComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    RetryComponent,
    DebounceComponent,
    SubjectComponent,
    HeaderComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    SwitchMapComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ThrottleTimeComponent,
    StartWithComponent,
    CombineLatestComponent,
    CatchErrorComponent,
    ZipComponent,
    FirstLastComponent,
    DistinctComponent,
    MergeComponent,
    BehaviorSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
