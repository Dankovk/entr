import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { OclButtonModule } from "./button/button.module";
import { OclTextfieldModule } from "./textfield/index";
import { OclWebinarCardModule } from "./webinar-card/webinar-card.module";
import { OclWatchEventModule } from "./watch-event/watch-event.module";
import { OclAssignmentProgressModule } from "./assignment-progress/assignment-progress.module";
import { OclAssignmentItemModule } from "./assignment-item/assignment-item.module";
import { OclAssignmentCardModule } from "./assignment-card/assignment-card.module";
import { OclStudentAssignmentCardModule } from "./student-assignment-card/student-assignment-card.module";
import { OclTabsModule } from "./tabs/index";
import { OclMainNavModule } from "./main-nav/main-nav.module";
import { OclStudentCardModule } from "./student-card/student-card.module";
import { OclRepertoireCardModule } from "./repertoire-card/repertoire-card.module";
import { OclQuizCardModule } from "./quiz-card/quiz-card.module";
import { OclAssignmentActivityModule } from "./assignment-activity/assignment-activity.module";
import { OclDrawerNavModule } from "./drawer-nav/drawer-nav.module";
import { OclAccountMenuModule } from "./account-menu/account-menu.module";
import { OclDrawerPageModule } from "./drawer-page/drawer-page.module";
import { OclDatefieldModule } from './datefield/datefield.module';
import { OclCheckboxModule } from './checkbox/checkbox.module'


@NgModule({
	imports: [
		CommonModule,
		OclButtonModule,
		OclTextfieldModule,
		OclWebinarCardModule,
		OclWatchEventModule,
		OclAssignmentProgressModule,
		OclAssignmentItemModule,
		OclAssignmentCardModule,
		OclStudentAssignmentCardModule,
		OclTabsModule,
		OclMainNavModule,
		OclStudentCardModule,
		OclRepertoireCardModule,
		OclQuizCardModule,
		OclAssignmentActivityModule,
		OclDrawerNavModule,
		OclAccountMenuModule,
		OclDrawerPageModule,
		OclDatefieldModule,
		OclCheckboxModule
	],
	// declarations: [ AwesomePipe, HighlightDirective ],
	exports: [/* AwesomePipe, HighlightDirective, */
		CommonModule,
		FormsModule,
		OclButtonModule,
		OclTextfieldModule,
		OclWebinarCardModule,
		OclWatchEventModule,
		OclAssignmentProgressModule,
		OclAssignmentItemModule,
		OclAssignmentCardModule,
		OclStudentAssignmentCardModule,
		OclTabsModule,
		OclMainNavModule,
		OclStudentCardModule,
		OclRepertoireCardModule,
		OclQuizCardModule,
		OclAssignmentActivityModule,
		OclDrawerNavModule,
		OclAccountMenuModule,
		OclDrawerPageModule,
		OclDatefieldModule,
		OclCheckboxModule
	]
})
export class OclModule {}
