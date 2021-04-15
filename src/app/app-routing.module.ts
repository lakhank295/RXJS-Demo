import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { AsyncComponent } from './async/async.component';
import { ListComponent } from './observables/list/list.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
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

const routes: Routes = [
  { path: '', component: ObservablesComponent, children: [
      { path: '', component: ListComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'custom-observables', component: CustomObservablesComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debounce', component: DebounceComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'replay', component: ReplaySubjectComponent },
      { path: 'asyncSubject', component: AsyncSubjectComponent },
      { path: 'switchMap', component: SwitchMapComponent },
      { path: 'mergeMap', component: MergeMapComponent },
      { path: 'concatMap', component: ConcatMapComponent },
      { path: 'throttleTime', component: ThrottleTimeComponent },
      { path: 'startWith', component: StartWithComponent },
      { path: 'combineLatest', component: CombineLatestComponent },
      { path: 'catchError', component: CatchErrorComponent },
      { path: 'zip', component: ZipComponent },
      { path: 'first-last', component: FirstLastComponent },
      { path: 'distinct', component: DistinctComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'behaviorSubject', component: BehaviorSubjectComponent }
    ] 
  },
  { path: 'promise', component: PromiseComponent },
  { path: 'async', component: AsyncComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
