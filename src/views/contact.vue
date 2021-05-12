<template>
  <div class="col-12">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52493.0287433769!2d-1.942497708335361!3d34.684636071776616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7864984106d6ef%3A0x1d86b33244c4650!2sOujda!5e0!3m2!1sfr!2sma!4v1620822352413!5m2!1sfr!2sma"
      height="450"
      style="border: 0"
      class="col-12"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    <div class="my-3"></div>
    <div class="container">
      <h1>Contact Van Deventer &amp; Van Deventer Incorporated</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="container">
            <h3>Your Contact Information</h3>
            <div
              class="form-group my-4"
              v-for="(item, index) in inputs1"
              :key="index"
            >
              <label class="fw-bold" :for="item.label"
                >{{ item.label }} :
                <span v-if="item.isRequired" class="text-danger">*</span></label
              >
              <input :type="item.type" :id="item.label" class="form-control" />
            </div>
          </div>
          <div class="container">
            <h3>Your feedback</h3>
            <div
              class="form-group my-4"
              v-for="(item, index) in inputs2"
              :key="index"
            >
              <label class="fw-bold d-block" :for="item.label"
                >{{ item.label }} :
                <span v-if="item.isRequired" class="text-danger">*</span></label
              >
              <input
                v-if="item.type != 'textarea'"
                :type="item.type"
                :id="item.label"
                :class="item.class ? item.class : 'form-control'"
              />
              <textarea v-else class="form-control" :id="item.label"></textarea>
            </div>
            <div class="card my-3">
                USE CAPTCHA AFTER VALIDATE WORK
            </div>
            <button class="btn btn-primary px-2">
                Send feedback
            </button>
          </div>
        </div>
        <div class="col-md-6 container">
          <div class="container">
            <h3>Rivonia, Sandton, Johannesburg</h3>

            <p>
              7 Mellis Rd<br />
              Rivonia<br />
              Sandton<br />
              2128
            </p>

            <p>
              P.O. Box 71466&nbsp;<br />
              Bryanston&nbsp;<br />
              2021
            </p>

            <p>
              Office: +27 10 448 1757<br />
              DOCEX:38 RIVONIA<br />
              Fax: 086 411 7980
            </p>

            <p>
              <a
                href="https://www.google.com/maps/place/Van+Deventer+%26+Van+Deventer+Incorporated/@-26.0448818,28.0550069,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x76b93e5e4e041cb3!8m2!3d-26.0448818!4d28.0571956"
                target="_blank"
              >
                <em class="fa fa-google"></em>
              </a>
            </p>
          </div>
          <div class="container">
            <h3>Tygervalley, Bellville, Cape Town</h3>

            <p>
              3 High Street<br />
              3<sup>rd</sup> Floor<br />
              Rosenpark<br />
              Tygervalley / Bellville<br />
              Cape Town<br />
              7530
            </p>
            <p>
              PO Box 1841<br />
              Brackenfell<br />
              7561
            </p>

            <p>
              Office: O21 982 2629<br />
              DOCEX: 9 Brackenfell<br />
              Fax: 086 411 7980
            </p>

            <p>
              <a
                href="https://www.google.com/maps/place/Van+Deventer+%26+Van+Deventer+Incorporated+Cape+Town/@-33.87413,18.6808213,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x9b671f62d7d8a844!8m2!3d-33.87413!4d18.68301"
                target="_blank"
              >
                <em class="fa fa-google"></em>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="my-3"></div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52493.0287433769!2d-1.942497708335361!3d34.684636071776616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7864984106d6ef%3A0x1d86b33244c4650!2sOujda!5e0!3m2!1sfr!2sma!4v1620822352413!5m2!1sfr!2sma"
      height="450"
      style="border: 0"
      class="col-12"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "page-contact",
  data() {
    return {
      inputs1: [
        { label: "email", type: "email", isRequired: true },
        { label: "name", type: "text", isRequired: true },
        { label: "city", type: "text", isRequired: false },
        { label: "telephone", type: "tel", isRequired: true },
      ],
      inputs2: [
        { label: "subject", type: "text", isRequired: true },
        { label: "message body", type: "textarea", isRequired: true },
        { label: "Send copy to yourself", type: "checkbox", isRequired: true, class: "form-check-input" },
      ],
    };
  },
};
</script>