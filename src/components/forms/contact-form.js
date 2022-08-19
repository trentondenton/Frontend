import React from 'react'

function ContactForm() {
  return (
    <div className="form-container">
      <form method="POST" data-netlify="true">
        <div className="form-card">
          <div className="form-group">
            <label for="name">Name</label>
            <input class="form-control-lg" type="name" placeholder="Enter name" area-aria-describedby='nameHelp'></input>
          </div>

          <div className="form-group">
            <label for="email">Email</label>
            <input class="form-control-lg" type="email" placeholder="Enter email address" area-aria-describedby='emailHelp'></input>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="form-control-txta-lg" rows="15"></textarea>
          </div>
          <button className="submit-btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm