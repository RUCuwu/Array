// 'id': Number,
// 'name': String,

// 'id': Number,
// 'name': String,
// 'course_id': Number,
// 'group_weight': Number,
// 'assignments': ['AssignmentInfo'],

// {
//     "id": number,
//     "name": string,
//     // the due date for the assignment
//     "due_at": Date string,
//     // the maximum points possible for the assignment
//     "points_possible": number,
//   }

// {
//     "learner_id": number,
//     "assignment_id": number,
//     "submission": {
//       "submitted_at": Date string,
//       "score": number
//     }
// }

// {
//     // the ID of the learner for which this data has been collected
//     "id": number,
//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
//     "avg": number,
//     // each assignment should have a key with its ID,
//     // and the value associated with it should be the percentage that
//     // the learner scored on the assignment (submission.score / points_possible)
//     <assignment_id>: number,
//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// }


// Course Information.
const courseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // Assignment Group.
  const assignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // Learner Submission Data.
  const learnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

  function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {

    if (assignmentGroup.course_id !== courseInfo.id){
      throw new Error("AssignmentGroup ID and course_ID don't Match CourseInfo");
     }
    
    
    const studentData = {};

    for (let i = 0; i < learnerSubmissions.length; i++) {
      let submission = learnerSubmissions[i];
      let assignment = null;

      for (let a = 0; a < assignmentGroup.assignments.length; a++) {
        if(assignmentGroup.assignments[a].id === submission.assignment_id) {
          assignment = assignmentGroup.assignments[a];
          break;
        }
      }
      
      if(!assignment || new Date(assignment.due_at) > new Date()) {
        continue;
      }
      
      const studentID = submission.learner_id;
      if(!studentData[studentID]) {
        studentData[studentID] = {
          id: studentID,
          totalscore: 0,
          totalpointspossible: 0,
          assignments: {}
        };
      }

      const maxPoints = assignment.points_possible;
      if (typeof maxPoints !=='number' || maxPoints <= 0) {
        throw new Error("Invalid" + assignment.id);
      }

      let score = submission.submission.score;
      let dueBy = new Date(submission.submission.submitted_at);

      if (dueBy > new Date(assignment.due_at)) {
        score -= maxPoints * 0.1;
      }

      score = Math.max(0, score);

      let percentage = (score / maxPoints) * 100;
      studentData[studentID].totalscore += score;
      studentData[studentID].totalpointspossible += maxPoints;
      studentData[studentID].assignments[assignment.id] = percentage;
  }

  function weightedAverage(scores, totalpointspossible){
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    return sum / totalpointspossible;
  }

  const results = [];
  for (let studentID in studentData) {
    if (studentData.hasOwnProperty(studentID)){
      let learnerData = studentData[studentID];
      let avg = weightedAverage(
        Object.values(learnerData.assignments),
        learnerData.totalpointspossible
      );

      const result = {
        id: learnerData.id,
        avg: avg
      };

      for (let assignmentId in learnerData.assignments) {
        if (learnerData.assignments.hasOwnProperty(assignmentId)) {
          result[assignmentId] = learnerData.assignments[assignmentId];
        };
      };

      results.push(result);
    };
  };
  
  return results;
};

console.log(getLearnerData(courseInfo, assignmentGroup, learnerSubmissions));