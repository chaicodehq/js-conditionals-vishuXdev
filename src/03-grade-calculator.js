/**
 * 📝 Ms. Parker's Report Cards
 *
 * Ms. Parker teaches 8th-grade science and needs help converting
 * percentage scores into letter grades for report cards. She also
 * rewards students who earned extra credit by adding 5 bonus points
 * to their score — but the final score can never go above 100.
 *
 * Grading Scale:
 *   - 90–100 → "A"
 *   - 80–89  → "B"
 *   - 70–79  → "C"
 *   - 60–69  → "D"
 *   - 0–59   → "F"
 *
 * Rules:
 *   - Check validity FIRST: if the original score is less than 0
 *     or greater than 100, return "INVALID"
 *   - If hasExtraCredit is true, add 5 points AFTER validation
 *     (cap the result at 100)
 *   - Then determine the letter grade from the adjusted score
 *
 * @param {number} score - The student's percentage score (0-100)
 * @param {boolean} hasExtraCredit - Whether the student has extra credit
 * @returns {string} The letter grade or "INVALID"
 */
export function calculateGrade(score, hasExtraCredit) {
  // Your code here
  let new_score = Number(score);
  
  let grade ;

  if(new_score < 0 || new_score > 100){
    return "INVALID"
  }


  if(new_score >= 90){
    if(hasExtraCredit == true){
      new_score+=5;
      if(new_score > 100){
        grade = "A"
      }
    } else {
      grade = "A";
    }
  } else if(new_score >= 80){
      if(hasExtraCredit == true){
        new_score+=5;
        if(new_score > 89){
        grade = "A"
        }

      }else {
        grade = "B"
      }
  } else if(new_score >= 70){
      if(hasExtraCredit == true){
        new_score+=5;
        if(new_score > 79){
          grade = "B"
        }
      }else {
        grade = "C"
      } 
  }else if(new_score >= 60){
    if(hasExtraCredit == true){
      new_score+=5;
      if(new_score > 69){
        grade = "C"
      }
    }else {
      grade = "D"
    }
  } else if(new_score >=0){
    if(hasExtraCredit == true){
      new_score+=5;
      if(new_score > 59){
        grade = "D";
      }
    }else{
      grade = "F"
    }
    
  }

  return grade;
}