import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {OclButtonModule} from "./button/index";
import {OclTextfieldModule} from "./textfield/index";
import {OclWebinarCardModule} from "./webinar-card/index";
import {OclTabsModule} from "./tabs/index";
import {OclMainNavModule} from "./main-nav/main-nav.module";
import {OclStudentCardModule} from "./student-card/student-card.module";
import {OclRepertoireCardModule} from "./repertoire-card/repertoire-card.module";
import {OclQuizCardModule} from "./quiz-card/quiz-card.module";






@NgModule({
	imports: [CommonModule, OclButtonModule, OclTextfieldModule, OclWebinarCardModule, OclTabsModule, OclMainNavModule, OclStudentCardModule, OclRepertoireCardModule, OclQuizCardModule],
	// declarations: [ AwesomePipe, HighlightDirective ],
	exports: [/* AwesomePipe, HighlightDirective, */
		CommonModule, FormsModule, OclButtonModule, OclTextfieldModule, OclWebinarCardModule, OclTabsModule, OclMainNavModule, OclStudentCardModule, OclRepertoireCardModule, OclQuizCardModule]
})
export class OclModule {}
