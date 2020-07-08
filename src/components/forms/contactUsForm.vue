<template>
  <div class="contact-us-form">
    <p class="contact-us-form__main-text">CONTACT US</p>
    <p class="contact-us-form__sub-text">
      If you didn’t find the answer to your question fill out the Contact us
      form below
    </p>
    <p
      class="contact-us__error-message"
      v-for="(error, index) in errors"
      :key="index"
    >
      {{ error }}
    </p>
    <form>
      <input
        class="contact-us-form_field contact-us-form__subject-input"
        type="text"
        placeholder="Subject"
        v-model="subject"
      />
      <textarea
        class="contact-us-form_field contact-us-form__message-input"
        placeholder="Message"
        v-model="message"
      >
      </textarea>
      <label class="contact-us-form_field contact-us-form__attachments-input">
        <div>
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.57617 19.7383C3.35547 20.5586 4.29883 21.1328 5.36523 21.4199C6.43164 21.707 7.49805 21.707 8.56445 21.4199C9.63086 21.1738 10.5742 20.5996 11.3945 19.7793L18.4492 12.5605C18.5723 12.4375 18.6543 12.2734 18.6543 12.1094C18.6543 11.9453 18.5723 11.7812 18.4492 11.6172L17.5059 10.7148C17.3418 10.5918 17.1777 10.5098 17.0137 10.5098C16.8496 10.5098 16.6855 10.5918 16.5625 10.7148L9.50781 17.9336C8.81055 18.6719 7.99023 19 7.00586 19C6.02148 19 5.16016 18.6719 4.46289 17.9336C3.76562 17.1953 3.4375 16.334 3.4375 15.3086C3.4375 14.2832 3.76562 13.3809 4.50391 12.6426L13.1172 3.86523C13.5273 3.45508 13.9785 3.25 14.5527 3.25C15.0859 3.25 15.5371 3.45508 15.9473 3.86523C16.3574 4.27539 16.5625 4.76758 16.5625 5.3418C16.5625 5.91602 16.3574 6.44922 15.9473 6.85938L8.44141 14.4883C8.35938 14.6113 8.23633 14.6523 8.11328 14.6523C7.99023 14.6523 7.86719 14.6113 7.78516 14.5293C7.70312 14.4473 7.66211 14.3242 7.66211 14.1602C7.66211 13.9961 7.74414 13.873 7.82617 13.75L13.7324 7.7207C13.8555 7.59766 13.9375 7.43359 13.9375 7.26953C13.9375 7.10547 13.8555 6.94141 13.7324 6.77734L12.7891 5.875C12.625 5.75195 12.4609 5.71094 12.2969 5.71094C12.1328 5.71094 11.9688 5.79297 11.8457 5.875L5.98047 11.9043C5.36523 12.5195 5.03711 13.2578 5.03711 14.1191C5.03711 14.9805 5.32422 15.7188 5.89844 16.334C6.47266 16.9492 7.21094 17.2773 8.11328 17.2773C8.97461 17.2773 9.71289 16.9902 10.3281 16.334L17.834 8.66406C18.4082 8.08984 18.8184 7.39258 19.0234 6.57227C19.2285 5.75195 19.2285 4.97266 19.0234 4.15234C18.8184 3.33203 18.4082 2.63477 17.834 2.01953C17.2188 1.44531 16.5215 1.03516 15.7422 0.789062C14.9219 0.583984 14.1426 0.583984 13.3223 0.789062C12.502 1.03516 11.8047 1.44531 11.2305 2.01953L2.6582 10.8379C1.83789 11.6582 1.30469 12.6016 1.01758 13.668C0.730469 14.7344 0.730469 15.8418 1.01758 16.9082C1.26367 18.0156 1.79688 18.959 2.57617 19.7383Z"
              fill="#0000A0"
            />
          </svg>
          <span>Attachments</span>
        </div>
        <input ref="files" @change="filesSelected" type="file" multiple />
      </label>
      <div class="contact-us-form__files">
        <span v-for="(file, index) in files" :key="index"
          >{{ file.name }}
          <svg
            @click="removeFile(index)"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0.6875C7.03125 0.6875 8.01562 0.96875 8.90625 1.48438C9.79688 2 10.5 2.70312 11.0156 3.59375C11.5312 4.48438 11.8125 5.46875 11.8125 6.5C11.8125 7.55469 11.5312 8.51562 11.0156 9.40625C10.5 10.2969 9.79688 11.0234 8.90625 11.5391C8.01562 12.0547 7.03125 12.3125 6 12.3125C4.94531 12.3125 3.98438 12.0547 3.09375 11.5391C2.20312 11.0234 1.47656 10.2969 0.960938 9.40625C0.445312 8.51562 0.1875 7.55469 0.1875 6.5C0.1875 5.46875 0.445312 4.48438 0.960938 3.59375C1.47656 2.70312 2.20312 2 3.09375 1.48438C3.98438 0.96875 4.94531 0.6875 6 0.6875ZM8.85938 8.02344L7.3125 6.5L8.85938 4.97656C8.90625 4.92969 8.92969 4.85938 8.92969 4.78906C8.92969 4.71875 8.90625 4.64844 8.85938 4.57812L7.92188 3.64062C7.875 3.59375 7.80469 3.57031 7.73438 3.57031C7.64062 3.57031 7.57031 3.59375 7.52344 3.64062L6 5.1875L4.47656 3.64062C4.40625 3.59375 4.33594 3.57031 4.26562 3.57031C4.19531 3.57031 4.125 3.59375 4.07812 3.64062L3.14062 4.57812C3.09375 4.625 3.07031 4.69531 3.07031 4.76562C3.07031 4.85938 3.09375 4.92969 3.14062 4.97656L4.6875 6.5L3.14062 8.02344C3.09375 8.09375 3.07031 8.16406 3.07031 8.23438C3.07031 8.30469 3.09375 8.375 3.14062 8.42188L4.07812 9.35938C4.125 9.40625 4.17188 9.42969 4.26562 9.42969C4.33594 9.42969 4.40625 9.40625 4.47656 9.35938L6 7.8125L7.52344 9.35938C7.57031 9.40625 7.64062 9.42969 7.71094 9.42969C7.78125 9.42969 7.85156 9.40625 7.92188 9.35938L8.85938 8.42188C8.90625 8.375 8.92969 8.32812 8.92969 8.23438C8.92969 8.16406 8.90625 8.09375 8.85938 8.02344Z"
              fill="#949BB6"
            />
          </svg>
        </span>
      </div>
      <button class="contact-us-form__button" type="button" @click="sendForm()">
        <span>
          SEND
        </span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0234 0.748047C20.3516 0.583984 20.7207 0.583984 21.0488 0.830078C21.377 1.07617 21.541 1.36328 21.5 1.77344L18.5469 19.4922C18.4648 19.8203 18.3008 20.0254 18.0137 20.1895C17.7266 20.3535 17.4395 20.3945 17.1934 20.2305L12.0664 18.0977L9.48242 21.2559C9.27734 21.502 9.03125 21.625 8.74414 21.625C8.45703 21.625 8.21094 21.543 8.00586 21.3789C7.80078 21.2148 7.71875 20.9277 7.71875 20.5996V17.3184L17.6035 5.25977C17.6855 5.17773 17.6445 5.05469 17.5625 4.97266C17.4395 4.89062 17.3164 4.84961 17.2344 4.93164L5.46289 15.3086L1.11523 13.5039C0.705078 13.3398 0.5 13.0527 0.5 12.6426C0.458984 12.2324 0.623047 11.9453 1.0332 11.7402L20.0234 0.748047Z"
            fill="#00D7B9"
          />
        </svg>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      subject: "",
      message: "",
      files: [],
      errors: [],
      maxSizeAtt: 20,
    };
  },
  computed: {
    isValidForm() {
      let isValid =
        this.checkInput(this.subject) &&
        this.checkInput(this.message) &&
        this.checkAttachments(this.files);
      return isValid;
    },
  },
  methods: {
    filesSelected(e) {
      let newFiles = Array.from(e.target.files || e.dataTransfer.files);
      this.files = [...this.files, ...newFiles];
    },
    removeFile(index) {
      this.files.splice(index, 1);
    },
    addErorrs() {
      if (!this.checkInput(this.subject))
        this.errors.push("Subject is required field!");
      if (!this.checkInput(this.message))
        this.errors.push("Message is required field!");
      if (!this.checkAttachments(this.files))
        this.errors.push(
          `Attachments size cannot more ${this.maxSizeAtt} megabytes`
        );
    },
    sendForm() {
      this.errors = [];
      if (!this.isValidForm) {
        this.addErorrs();
        return false;
      } else {
        alert("done!");
        //send form here
      }
    },
    checkInput(value) {
      return value.length !== 0 || value !== "";
    },
    checkAttachments(list) {
      let sumSize = Math.max.apply(
        Math,
        list.map(function(item) {
          return item.size;
        })
      );
      return this.maxSizeAtt >= sumSize / 1024 / 1024;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700&subset=cyrillic");
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:400,500,700");

.contact-us-form {
  font-family: Roboto;
  .contact-us__error-message {
    color: #f44336;
    margin: 8px 0;
    font-size: 12px;
  }
  .contact-us-form__main-text {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #00d7b9;
  }
  .contact-us-form__sub-text {
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #0000a0;
    max-width: 488px;
  }
  .contact-us-form_field {
    &,
    &:focus,
    &:active {
      border: 1px solid rgba(0, 0, 160, 0.5);
    }
    margin-bottom: 18px;
    display: block;
    padding: 13px 20px;
    font-size: 18px;
    line-height: 21px;
    color: #343434;
    box-sizing: border-box;
    border-radius: 3px;
    &::placeholder {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #949bb6;
    }
  }
  .contact-us-form__subject-input {
    @media screen and (min-width: 768px) {
      width: 445px;
    }
    width: 100%;
    max-width: 445px;
    height: 50px;
  }
  .contact-us-form__message-input {
    @media screen and (min-width: 768px) {
      width: 635px;
    }
    width: 100%;
    max-width: 635px;
    height: 150px;
    resize: none;
  }
  .contact-us-form__attachments-input {
    @media screen and (min-width: 768px) {
      width: 635px;
    }
    width: 100%;
    max-width: 635px;
    height: 50px;
    svg {
      margin-right: 8px;
    }
    span {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #949bb6;
      margin-bottom: 2px;
    }
    input {
      display: none;
    }
  }
  .contact-us-form__files {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #0000a0;
    margin-bottom: 20px;
    span {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
    svg {
      vertical-align: bottom;
      cursor: pointer;
    }
  }
  .contact-us-form__button {
    width: 160px;
    height: 50px;
    background: #0000a0;
    border: 1px solid #0000a0;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    margin-bottom: 20px;
    padding: 0 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 21px;
      line-height: 25px;
      color: #ffffff;
    }
    svg {
      vertical-align: text-bottom;
    }
  }
}
</style>
