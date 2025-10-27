<template>
    <section class="h-screen w-screen top-0 bottom-0 fixed z-20 flex items-center justify-center"
        style="background-color: rgb(0 0 0 / 80%);" @click="closeModal">
        <Transition name="backdrop">
            <div v-if="showModal" class="absolute inset-0 bg-black/60"></div>
        </Transition>
        <Transition name="modal">
            <div v-if="showModal"
                class="min-h-[650px] w-[90%] desktop:w-[720px] bg-white grid desktop:grid-cols-2 grid-cols-1 relative z-10"
                @click.stop>
                <div class="col-span-1 hidden tablet:flex desktop:flex">
                    <img src="/assets/popup.svg" alt="Registration" class="h-full w-full object-cover">
                </div>
                <div class="flex flex-col px-[40px] py-[80px] col-span-1 gap-[30px] justify-start relative">
                    <div class="text-[#416887] text-[27px] desktop:font-medium leading-[30px] uppercase font-bold">
                        REGISTER TO learn more
                    </div>

                    <form @submit.prevent="handleSubmit" class="flex flex-col gap-[30px]">
                        <div class="w-full flex flex-col">
                            <label
                                :class="['relative font-light transition-all duration-300', focusedField === 'firstName' || firstName ? 'top-0 text-sm' : 'top-[12px]']"
                                style="font-weight: 100;">
                                First Name
                            </label>
                            <input v-model="firstName" type="text"
                                :class="['outline-none h-fit border-b-[1.5px] transition-colors duration-300', getBorderClass('firstName')]"
                                @focus="focusedField = 'firstName'" @blur="focusedField = null">
                            <span v-if="errors.firstName"
                                class="text-red-500 text-xs mt-1 transition-all duration-300">{{ errors.firstName
                                }}</span>
                        </div>

                        <div class="w-full flex flex-col">
                            <label
                                :class="['relative font-light transition-all duration-300', focusedField === 'lastName' || lastName ? 'top-0 text-sm' : 'top-[12px]']"
                                style="font-weight: 100;">
                                Last Name
                            </label>
                            <input v-model="lastName" type="text"
                                :class="['outline-none h-fit border-b-[1.5px] transition-colors duration-300', getBorderClass('lastName')]"
                                @focus="focusedField = 'lastName'" @blur="focusedField = null">
                            <span v-if="errors.lastName"
                                class="text-red-500 text-xs mt-1 transition-all duration-300">{{ errors.lastName
                                }}</span>
                        </div>

                        <div class="w-full flex flex-col">
                            <label
                                :class="['relative font-light transition-all duration-300', focusedField === 'phone' || phone ? 'top-0 text-sm' : 'top-[12px]']"
                                style="font-weight: 100;">
                                Best Phone Number
                            </label>
                            <input v-model="phone" type="tel"
                                :class="['outline-none h-fit border-b-[1.5px] transition-colors duration-300', getBorderClass('phone')]"
                                @focus="focusedField = 'phone'" @blur="focusedField = null" placeholder="">
                            <span v-if="errors.phone" class="text-red-500 text-xs mt-1 transition-all duration-300">{{
                                errors.phone }}</span>
                        </div>

                        <div class="w-full flex flex-col">
                            <label
                                :class="['relative font-light transition-all duration-300', focusedField === 'email' || email ? 'top-0 text-sm' : 'top-[12px]']"
                                style="font-weight: 100;">
                                Email
                            </label>
                            <input v-model="email" type="email"
                                :class="['outline-none h-fit border-b-[1.5px] transition-colors duration-300', getBorderClass('email')]"
                                @focus="focusedField = 'email'" @blur="focusedField = null">
                            <span v-if="errors.email" class="text-red-500 text-xs mt-1 transition-all duration-300">{{
                                errors.email }}</span>
                        </div>
                        
                        <div :class="['g-recaptcha', {'border border-red-500 p-2': errors.recaptcha}]" 
                             :data-sitekey="V2_SITE_KEY"
                             @focus="errors.recaptcha = ''"
                        ></div>
                        <span v-if="errors.recaptcha"
                            class="text-red-500 text-xs -mt-6 transition-all duration-300">{{ errors.recaptcha
                            }}</span>
                        <button type="submit"
                            class="bg-[#456276] h-[50px] cursor-pointer rounded-[8px] text-white font-medium transition-all duration-300 hover:bg-[#3a5264] active:scale-95">
                            Register Now
                        </button>
                    </form>
                    <div v-if="showSuccess" 
                        class="absolute inset-0 flex items-center justify-center bg-white/90 z-20 transition-all duration-500">
                        <div class="text-[#416887] text-lg font-medium flex flex-col items-center gap-2">
                            ✅ Registration successful!
                            <small class="text-gray-500 text-sm">Closing in 5 seconds...</small>
                        </div>
                    </div>

                    <svg @click="closeModal" width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="cursor-pointer absolute top-[40px] right-[40px] transition-all duration-300 hover:scale-110 hover:rotate-90">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.70711 7.12132L1.41421 11.4142L0 10L4.29289 5.70711L0 1.41421L1.41421 0L5.70711 4.29289L10 0L11.4142 1.41421L7.12132 5.70711L11.4142 10L10 11.4142L5.70711 7.12132Z"
                            fill="#B8B8B8" />
                    </svg>
                </div>
            </div>
        </Transition>
    </section>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
const V2_SITE_KEY = '6Lf5JfkrAAAAAFZ6-0p1DHfpF4Yy0QYhEnSaa9ZE'; 
const firstName = ref('');
const lastName = ref('');
const phone = ref('');
const email = ref('');
const focusedField = ref('firstName');
const isLoading = ref(false);
const showModal = ref(false);
const showSuccess = ref(false);
const emit = defineEmits(['close']);
const errors = reactive({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    recaptcha: ''
})
const loadRecaptchaScript = () => {
    if (typeof window.grecaptcha !== 'undefined') {
        return;
    }
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?hl=en`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
};


onMounted(async () => {
    loadRecaptchaScript(); 
    
    await nextTick()
    showModal.value = true
    setTimeout(() => {
        const firstInput = document.querySelector('input[type="text"]')
        if (firstInput) {
            firstInput.focus()
        }
    }, 100); 
})

const closeModal = () => {
    showModal.value = false
    setTimeout(() => {
        emit('close');
    }, 500)
}

const getBorderClass = (field) => {
    return focusedField.value === field ? 'border-[#4FA0D5]' : 'border-[#000000A6]'
}

const validateUSPhone = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, '')
    const phoneRegex = /^1?\d{10}$/
    return phoneRegex.test(cleaned)
}

const validateEmail = (emailAddress) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(emailAddress)
}

const validateForm = () => {
    let isValid = true
    errors.firstName = ''
    errors.lastName = ''
    errors.phone = ''
    errors.email = ''
    errors.recaptcha = ''
    if (!firstName.value.trim()) {
        errors.firstName = 'First name is required'
        isValid = false
    }

    if (!lastName.value.trim()) {
        errors.lastName = 'Last name is required'
        isValid = false
    }
    if (!phone.value.trim()) {
        errors.phone = 'Phone number is required'
        isValid = false
    } else if (!validateUSPhone(phone.value)) {
        errors.phone = 'Please enter a valid US phone number'
        isValid = false
    }
    if (!email.value.trim()) {
        errors.email = 'Email is required'
        isValid = false
    } else if (!validateEmail(email.value)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
    }
    
    if (typeof grecaptcha === 'undefined') {
        errors.recaptcha = 'reCAPTCHA service is not loaded yet. Please wait a moment and try again.';
        isValid = false;
    } else {
        const recaptchaToken = grecaptcha.getResponse();
        if (!recaptchaToken) {
            errors.recaptcha = 'Please complete the "I am not a robot" check.';
            isValid = false;
        }
    }

    return isValid
}

const handleSubmit = async () => {
     if (isLoading.value) return;
    if (!validateForm()) return
    const recaptchaToken = grecaptcha.getResponse();
    isLoading.value = true;
    const payload = {
        first_name: firstName.value,
        last_name: lastName.value,
        phone: phone.value,
        email: email.value,
        recaptcha_token: recaptchaToken
    }

    try {
        const response = await fetch('http://localhost:8000/index.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        const data = await response.json()
        grecaptcha.reset();

        if (!response.ok) {
            if (data.errors) {
                errors.firstName = data.errors.first_name || ''
                errors.lastName = data.errors.last_name || ''
                errors.phone = data.errors.phone || ''
                errors.email = data.errors.email || ''
            }
            if (data.recaptcha_failed) {
                errors.recaptcha = data.message || 'Verification failed. Please try again.';
            }

            alert(`Error: ${data.message || 'Failed to submit form'}`)
            return
        }
        showSuccess.value = true;
        firstName.value = ''
        lastName.value = ''
        phone.value = ''
        email.value = ''

        setTimeout(() => {
            showSuccess.value = false
            closeModal()
        }, 5000)
    } catch (error) {
        console.error('Network or server error:', error)
        alert('An unexpected error occurred. Please try again.')
    } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
.g-recaptcha {
    margin-top: 10px;
}
.backdrop-enter-active,
.backdrop-leave-active {
    transition: opacity 0.5s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
    opacity: 0;
}

.modal-enter-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.modal-enter-from {
    opacity: 0;
    transform: scale(0.8) translateY(-20px);
}

.modal-leave-to {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
}

input {
    transition: all 0.3s ease;
}

input:focus {
    transform: translateY(1px);
}

button {
    transition: all 0.3s ease;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(69, 98, 118, 0.3);
}

button:active {
    transform: translateY(0);
}

span {
    transition: all 0.3s ease;
}
</style>