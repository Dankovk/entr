import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { OclButtonModule } from "./button/button.module";
import { OclTextfieldModule } from "./textfield/index";
import { OclWebinarCardModule } from "./webinar-card/webinar-card.module";
import { OclWatchEventModule } from "./watch-event/watch-event.module";
import { OclTabsModule } from "./tabs/index";
import { OclMainNavModule } from "./main-nav/main-nav.module";
import { OclStudentCardModule } from "./student-card/student-card.module";
import { OclRepertoireCardModule } from "./repertoire-card/repertoire-card.module";
import { OclQuizCardModule } from "./quiz-card/quiz-card.module";
import { OclAssignmentActivityModule } from "./assignment-activity/assignment-activity.module";


@NgModule({
	imports: [
		CommonModule,
		OclButtonModule,
		OclTextfieldModule,
		OclWebinarCardModule,
		OclWatchEventModule,
		OclTabsModule,
		OclMainNavModule,
		OclStudentCardModule,
		OclRepertoireCardModule,
		OclQuizCardModule,
		OclAssignmentActivityModule
	],
	// declarations: [ AwesomePipe, HighlightDirective ],
	exports: [/* AwesomePipe, HighlightDirective, */
		CommonModule,
		FormsModule,
		OclButtonModule,
		OclTextfieldModule,
		OclWebinarCardModule,
		OclWatchEventModule,
		OclTabsModule,
		OclMainNavModule,
		OclStudentCardModule,
		OclRepertoireCardModule,
		OclQuizCardModule,
		OclAssignmentActivityModule
	]
})
export class OclModule {}
