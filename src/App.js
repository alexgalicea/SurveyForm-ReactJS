import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <div className="form">
        <header>
          <h1 id="title">MCM Rubric</h1>
          <p id="description">
            Thank you for taking the time to help us <br /> improve the platform
          </p>
        </header>
        <form id="survey-form">
          <label htmlFor="name" id="name-label">
            Author Login
          </label>
          <input id="name" type="text" placeholder="Enter MCM author login" required />
          <label htmlFor="email" id="email-label">
            MCM number
          </label>
          <input
            id="email"
            type="email"
            placeholder="MCM-XXXXXXX"
            required
          />
          <br />
          <hr class="solid" />
          <br />
          <h2>General Content Checks</h2>
          {/* General Content Questions */}
<div id="rubric">
        <div class="cell empty">
       </div>
        <div class="cell level begins">
          <span>Begins</span>
         </div>
         <div class="cell level approaches">
           <span>Approaches</span>
         </div>
         <div class="cell level meets">
           <span>Meets</span>
         </div>
       
        <div class="cell level exceeds">
          <span>Exceeds</span>
        </div>
       <div class="cell skill">
          <label>
          Are all items in the Overview clear and detailed so that anyone viewing the CM, regardless of specific technical knowledge, can understand the need and risks of the CM?
          </label>
        </div>
        <div class="cell">  
          
          {/* <!-- end header, start first row --> */}
          
            <input type="radio" id="radio-1" name="row1"/>
          <label for="radio-1" class="begins">Few or no words are pronounced correctly.</label>
        </div>
       <div class="cell">
            <input type="radio" id="radio-2" name="row1"/>
         <label for="radio-2" class="approaches">Some words are pronounced correctly.</label>
       </div>

  
        <div class="cell">
          <input type="radio" id="radio-3" name="row1"/>
          <label for="radio-3" class="meets">Most words are pronounced correctly.</label>
        </div>
  
       <div class="cell">
         <input type="radio" id="radio-4" name="row1"/>
         <label for="radio-4" class="exceeds">All words are pronounced correctly.</label>
       </div>
  
    {/* <!-- end row 1, start row 2 --> */}
    <div class="cell skill">
          <label>
          Is the Worst Case Scenario accurate and realistic to measuring a total-failure situation of the CM?
          </label>
        </div>
  

  
    <div class="cell">
          <input type="radio" id="radio-5" name="row2"/>
          <label for="radio-5" class="begins">Struggles to read</label>
        </div>
  
       <div class="cell">
         <input type="radio" id="radio-6" name="row2"/>
         <label for="radio-6" class="approaches">Reads word for word</label>
       </div>
  
     <div class="cell">
          <input type="radio" id="radio-7" name="row2"/>
          <label for="radio-7" class="meets">Groups words together logically</label>
        </div>
  
       <div class="cell">
         <input type="radio" id="radio-8" name="row2"/>
         <label for="radio-8" class="exceeds">Reads easily and fluently</label>
       </div>
  
    {/* <!-- end row 2, start row 3  --> */}

  <div class="cell skill">
          <label>
          Are all steps clear and detailed so that anyone with the permissions to perform the steps, regardless of tenure or individual skill, may do so without difficulty?
          </label>
       </div>
  
    <div class="cell">
          <input type="radio" id="radio-9" name="row3"/>
          <label for="radio-9" class="begins">Ignores punctuation marks</label>
        </div>
  
       <div class="cell approaches">
         <input type="radio" id="radio-10" name="row3"/>
         <label for="radio-10" class="approaches">Replaces punctuation marks with a breath</label>
       </div>
  
     <div class="cell meets">
          <input type="radio" id="radio-11" name="row3"/>
          <label for="radio-11" class="meets">Observes punctuation but stops at the end of a line</label>
        </div>
  
       <div class="cell">
         <input type="radio" id="radio-12" name="row3"/>
         <label for="radio-12" class="exceeds">Uses punctuation correctly and efficiently</label>
       </div>
{/* <!-- end row 3, start row 4  --> */}

<div class="cell skill">
          <label>
          Is the CM clearly calling out any spare hardware that should be brought along in the event of an issue requiring full device replacement?
          </label>
       </div>
  
    <div class="cell">
          <input type="radio" id="radio-9" name="row3"/>
          <label for="radio-9" class="begins">Ignores punctuation marks</label>
        </div>
  
       <div class="cell approaches">
         <input type="radio" id="radio-10" name="row3"/>
         <label for="radio-10" class="approaches">Replaces punctuation marks with a breath</label>
       </div>
  
     <div class="cell meets">
          <input type="radio" id="radio-11" name="row3"/>
          <label for="radio-11" class="meets">Observes punctuation but stops at the end of a line</label>
        </div>
  
       <div class="cell">
         <input type="radio" id="radio-12" name="row3"/>
         <label for="radio-12" class="exceeds">Uses punctuation correctly and efficiently</label>
       </div>
</div>
          <label htmlFor="checkbox" id="textarea-label">
            Any comments or suggestions?
          </label>
          <textarea
            name="textarea"
            placeholder="Enter your comments here..."
          ></textarea>
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div id="footer"></div>
    </div>
  );
}
