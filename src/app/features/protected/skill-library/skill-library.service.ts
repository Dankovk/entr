import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";


interface UserResponse {
	User: Object
}

interface SkillLibrary {
	Event: Object
}

interface StudentAssignment {
	allAssignmentHistoryEntries: any
}


const CurrentUserForProfile = gql`
  query {
    User (id: "cj2z1m9rtmojg01749i36wspj"){
      level
      email
      name
    }
  }
`;

const SkillLibrary = gql`
  query {
   Event {
      title
      text
      createdAt
      endDate
    }
  }
`;

const SkillLibraries = gql`
  query {
   allEvents {
      title
      text
      createdAt
      endDate
    }
  }
`;

const AssignmentActivity = gql`
	query {
		allAssignmentHistoryEntries {
			lastEventDate
		}
	}
`;


@Injectable()
export class SkillLibraryService {
	constructor(private apollo: Apollo) {}

	loadUser() {
		return new Observable(observer => {
			this.apollo.watchQuery<UserResponse>({
				query: CurrentUserForProfile,
			}).subscribe(({data}) => {
				observer.next(data.User);
			});
		});
	}

	loadSkillLibraries() {
		return new Observable(observer => {
			this.apollo.watchQuery<SkillLibrary>({
				query: SkillLibraries,
			}).subscribe(({data}) => {
				observer.next(data);
			});
		});
	}

	loadStudentAssignment() {
		return new Observable(observer => {
			this.apollo.watchQuery<StudentAssignment>({
				query: AssignmentActivity,
			}).subscribe(({data}) => {
				observer.next(data.allAssignmentHistoryEntries);
			});
		});
	}

}
