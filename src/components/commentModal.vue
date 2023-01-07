<script>
export default {
  name: "Modal",

  data() {
    return {};
  },

  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <div
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <header class="modal-header" id="modalTitle">
          <slot name="header"> Header text </slot>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
            aria-label="Close modal"
          >
            x
          </button>
        </header>
        <section class="modal-body" id="modalDescription">
          <div class="comment d-flex flex-column">
            <slot></slot>
          </div>
        </section>
        <footer class="modal-footer">
          <slot name="footer"></slot>
          <button
            type="button"
            class="btn btn-danger"
            @click="close"
            aria-label="Close modal"
          >
            Close me!
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  background-color: rgb(0 0 0 / 30%);
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 650px !important;
    height: 80vh;
  }
}

.modal-content {
  background: var(--background-color-primary);
  padding: 30px;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal.fade:not(.show) {
  opacity: 0;
  visibility: hidden;
  display: none;
}

.modal.show {
  opacity: 1;
  visibility: visible;
  display: flex;
}

.comment-item {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}

.comment-item .body p {
  color: var(--text-primary-color);
  margin: 0;
}
</style>