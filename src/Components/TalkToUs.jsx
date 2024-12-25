import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper Autoplay module
import "swiper/css";
import { FaInstagramSquare } from 'react-icons/fa';
import { PiYoutubeLogo } from 'react-icons/pi';
import { SiThreads } from 'react-icons/si';
import emailjs from 'emailjs-com';
 

const ContactLoginPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
 
 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await emailjs.send(
        'service_qzz4yef',
        'template_w1e9hgu',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'g3lutaVJ_7kGr-iUO'
      );
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('FAILED...', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const toggleMusic = () => setIsMusicPlaying((prev) => !prev);

  const changeTrack = (index) => setCurrentTrackIndex(index);
  const slides = [
    {
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEA8PDxAPDw8PEBAWFQ8QEBAPEBYWFRcWGBUVFhUYHSggGBolGxYVITIhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGSsmHSUtLS8tKy0tLisrLS0rKy0tLS0vLystNy0tLS0tLS0rLS0tLS0tLS0tKy0rMSstLS0tLv/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAYFBwj/xABIEAACAQMCAwYDBAYGBwkBAAABAgMABBESIQUTMQYiQVFhcQcygRRCkaEjUmKCkqJDU3KxstEWJDM0Y8HDRFRzdISz0uHwFf/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAxEQACAgEDAgQEAwkAAAAAAAAAAQIRAwQSMSFBBRMygSJRcdEGYZEUFjNCU6Gx8PH/2gAMAwEAAhEDEQA/AO1inAU4LSgVwTpDcUtOxRigCMikxUhFJigBuKQrUmmjTQBFppwWpAtO00ARYprCp9NMZaBFaRgoJPQAk+w60wTrkKcox6JIrRuR5hWAJHqNqfDFLOj6LeV0y6Nh7cEYyCCGkB/LcGtVw2AyWsUd1GrNy1V0dVZSy7E4ORvjP1rDrNdDTJcPrTSatewrMvacLe6NyiymMqqAKVDLhwcnbcNscHJHp5dbtJwAyjXb6Q5CpIh2DxnCk58JFHQ+Iyp+6V6thwmGB5JIgymRUVgXZlwpYjAYnHzHptV6uJqfFsjzqeJ/CuE180rTFRS4nw2O4j5cmoYIKuhCupG2VPgcEj2Y1LLZoYWgACxtGY9KjACldOAParFFczzslKN9E7S/MdHG4Bwdov0txoacjA0ZKIviFJ3JbqT7DwyZeC8EjtcEEySAYErAZCjGFUfdGAM4+YjJ8AOpRV2XX58jk3L1VftwvoFI4EvZxzI5WdEjeR3xyy8nfYsyjvADBJwd/DaouJ8DKCBbaF5TqcvMzpryAAutmIAXDSbKMDwFaSitcfGdQpJuml24v60LaYridhPCItUkAklY4iVXm7i4LuXJTGAQPlPedfDJqNhWhveCPNM8rzhUKoqqkep1VR01MdOSxY/Keo8hVa94HBDG0r3N1hcbabYkk4CqoEYyxJwBnxru4fEMU1GLknN9kny+wKVcnCZarzCrgU432PlnOPIE+JqvMtdAtRx7oVmOMeNaq6XrWV4z41bj5Iy4M1Md6jBpZzvTFNb48GZ8kwo00i0+nY6I2WoitWaTTRYUVsUYqxoo5dOxbSvilxU3Lo5dFhtPd8UuKfilArjmkZikxUmmjTQBHijTUmmlxQIZilxTwKXTQBGBTtNP004LQFkWmobiRUGWOBnA6kk+QA3J9BvVvTVXiAi0HmkKpIw2dLavDSeuryxvTQmyXgEM5nMscZjhcYkMhwXIxpZYx0ONsnBwACNhWqrCT9qTYW4klUu7kqkZGhnI6Mw+53cE+XTGcCsXN244pNIWFzyV/qoY4wgHgAWBY+5P4dK4c/CtT4hllk+GKXS/nX+fqVyyRie30V4l/pXxL/vk34Rf/GrFh2g4vNIsMFzPLI2cIqQE7dSSy4A9SQKl+62o/qR/v9iP7RE9lorH23Au0RVWPEbYEjOnTG4Hl3uTg1I1j2lTOmThko8C3N1fwqij86ql+GNUuJRfu/sHnxNZRWKF92kiY83h9tcJjrA6R/mZmb+Sn/6bzRf73wy+g82WNnQfvOqAj2NZsn4f10OIp/Roks0GbKis1Y9vOFzbC5WMjqJlaID99ho/mrQwTpIoeN1dD0ZGDKfqNq5mbS5sP8SDX1RNST4ZJXJ43w2WZo2R4yI1OmJ9SDWchn1gNvpIUd3YFuurbrUCnptRPBPfCr/MbVmQu7SWFdUyKiZA5iyK8eScAb4bJP7NU5lrocTEnPzcghyWEWccnTg7QnpqxnOcOd8gLgCrKm1e3xOTgnKr/Lj2CLZxLtdjWP44Otbe8TY1iuPeNacfI5GTn61GtPn61Gtb48GZlhKfUSGpAaCQtOApmaelAyRUp/Lp8YqdY6g2XRjZV5dHLq6IKX7PUN5Lyz2MCnAU8LSha55GxmKMVJikxQFjAKULTsUoFAhoFLingUuKYhgFOApwFLigBmmop4FcaWGR7kEeoI3B9RvVgikoA8z+IeVmgi5juFjZsOVJGtsDcAE/Idzk+tZ+2TA967fxG/3/AP8ASw/45q5Irr6aKjjSRhyepi1vfhTwgTG8lYsv6PkK6HS66xqkKt4H/ZHPpWCr1f4buYOFNOkbSs9w50KGJ+cRFsKCx0hNRABOFOBV5A2/DbJYIxGpJGp2JIRd2YsdlAUbnwH571aqrwy5eWJJHjaF2BzGwIIwSM4IBAIAIyAcEZAORVqkAUUVnpXFwJbi4d47CEuqxKXBm0Eq0j6e86kghUGzDB7xYAAHS4jwW0uP94toJseMkSMQfRiMg1lp/h1ZEmWwnuLGTUwL28zOmpSQwbJ1bMCCoYYIxVxLCyyqLZS8Mkk7sVzHHFA2rcqNUTHSdvlfAPTcnFaDhNgttBFArM4jXBdsanbqztj7zMSx9WNJpNUwMHPNxzh2TOicTth/SxApMB5sFXIxv91xtu1djs72stL7AhcrKRnkSYWTGMkrgkOPVSfXFabiXN5T8g4lx3T3c59MgjPlnbPWvIviRw3kvaSmPlS3H2lm3QSZjkUxM3L7vMCyDLL4gbkjNcbWeBaXUdUtsvmvtwXQzSR6Txm5SKILNC88crBdCiMjJ+XJdlA36b5z03rMCNhqGG0Z7mtg8gHkxHXHn1PjuMnkdke111NmxuI47xDE7a5XKOVUoCrMFOs94EE4O25OcjtW7MQ6ssi6HKqZdOtlwCrEqSCd8E53Kk7ZxWbTaKWli8b/AFvn27F8JbnZy75djWG7QDc1vr8bGsJ2gG5rZj5LWY6cb1GKlnG9RrW+PBnZItLSCloZIWpYqhqaKkNFyOrMbYqojVLrqDNEHRbEtLzqp66NdQ2lm49xApwFGKcBWAziYoxTqQ0ANxQBTsUUAFLigClqQABTsUgpaKEIRSaadRSoLPG+2V0Zb+5bOVjKxKPIR5yP4y5+tVxUHFD/AKxc/wDmbj/3HqWFsgV24KopGGXLH17F8Kp1Xhi6iBy5pwfdpGYD3IZdvWvHa0nZbtOlpDPbzwvPDK6SKEflsrrpOdWQRgpGwI3BT12mRPcIJVdVdGV0dQVZSCpB3BBHUVJXmlr8T7aKNY0tLkKgwBqjb8WZ8k+OTk1YtfivbMcSW11EP1sQuv8ALJn8qQG24zcmK3nkX50jbT/bIwn8xFcXgFxb/ZIuH3RSKaCFIZIZG5RYRgKJIzkEocBgy9PQjArp244Tcq0ckselsApcI8SnGD1kUA74P0q5Fw3hVwob7PaXSDcErFcx+4zkCgBXMU3KtLaRp1iniklmMhmEYikWUIZDnLllUac5CknbAzoqggMaqEQKir0VQEUegA2FTUAR3M6xqXY4AxudhknAyfDcjevI/itxBZ5rPA0tHBOSuVbGqYxncHBGqBt/HFer8QuookzLkq50hQjSltiSAiglu6GJ26A14l8QL2ObiEpi08uKOGJCuNOlV1bY2wGkcUAS/DyHN1I/6luV/jdD/wBM1vZ1rJfDa32uZf1mjT+AFv8AqCthMNq5epd5Ga8XSJwuIDY1hO0I3Nb7iA2NYLtF41DHyXdjGz9ajUVLcdaiFb48FD5JKKBRQSFFTR1CKmSmNDi+KOdUUpqAmlQ3Jl3n03n1T1UmaW0W9n0fTlptOFcuiYtFGKWigExSYpaWkFgBS4oFLipoBAKXFOAp2KZGyPFQyz4ZI1VpJJM6UXSNhjUxLEAAZX8RVnFUJVf7VAFOOYFBOSuFWWPmAEbglHbGPLw61KEU31E2Yi37BTXF5dCZ/si86RxGyrLKVdiwPdbSAcnBBb5SNiCK7Nl8MbcXCxPdXDIY2fCLEjZRkGCxDbHWegB7vWtPfQNBdQSLIZIQeQ4kJaWMuuuMGQ7uvXGrLAy9Tnu9WyB+1SnwW3hA/eebP+Fayz1Wpjr1j3fA43VL/vJBQjV9ziD4bcL8Y5m9ftM4/uYUjfDbhngk6+1xK3+ImtfWduu0commihtllW3kCM73HKJYxpJ3VCNkYkAySNwdvE9TH52R1C2yE3CCuRnuK/CuFlJtbmeKTwWXlSREeI2QMp/ayceRrMydjRG6xXN09lIxAVrmBZbaRvKO6jZVz+y6o3pXo9l2mkkaRf8A+fdHlOEdopLSRVYqr9DKrHusp2XxqxNxu0cNFcJKisMMtzazJCQfAuycs/ianvyQdSCoyVo8w4h8PuJxbpFHcrnbkSqGx5lZdH4Ams7dcOnt21zW89u6f0skUkWP7MhA/I17vwPh8UK/6rKWtGHchD86JN+sL5JVfDRkqMDSF3z0LjXpPLCM3gHYqn1IBP5ULUNOheWjwew7VX8WOXdyso+7IROD9ZAT+BrR8O+Jt0mBNBDKM7tEzQED+ydYY/w1p+Mdk5bnJaDhCuRgyfZ7gyYPXDxvG31yK48Pwo3ZpL0jPyxxQYjX6yO7t9Wq5Z4dyPls6afEmxljIZrm1kxseQsrZ/ZxrUHwycda8hjGAM7eJy2rc7nvePvW5vfhhfJ/sZracb/NzLd/TC4YH+IVxm7G3ocLNEkcf2iGN9Usblg5VmVQhO/LJbfG3rtTeaC7kdrNr2MszFZQgjDSAykEYP6Q6lB9QukfSutN0qYL5dKimG1cqb3SbNSVI4fEehrBdouprfcS6GsD2h6mpY+SzsY2frUYqafrUQrfHgpY4UUtNNAxRUyVBU8VNkhHFQlatlaiIqNgQFaTTUxFLpp2Kj6IxTgKMU4CuYWCUuKXTS4pAMxRin4pKdCACnYoFLimgClpKUUERKo8VbQqTj/s8iufRN1kJ9ArFv3avUhAIIIyCMEHoR5VKLpgUO0yOxkWPUSzwzADoG5TLET5DXb492HnXX4BcrLJLKpyskFowPoecf8AnXL4RC8rLbF3QWyyRyOD35Ie40KhjuGIO7jcYkAwSGXpcB4e1vPdRhNMGmEwsPl0lpWMY8tJYgDwXTUsuKLnGfdJr2dfYidyuBxTs9I8rzWs6W7y6eYskBuI2ZVChwBIhD6QoJyQQq7bZPWubGOQ5bmZ/Zllj/JWFMi4aikFXuBjGxuJpAfpIxH4VbjyPG90XTIzgpqpLoN4NwxbaMorF3dy8krYDO5wCxxsNgqgeAUDwq9RRUHJydskkkqQiqB0AHsK4vbKR1tGZXeNVlgMskbFHWISLzDrG6jHzEEYXUc126CKIy2yTE1aowLmaNoIrW8uhJNNEAjTfayY9amZv04c4WPWc5xkAeODpynEY8lXtLoeCSJJZv8AWVTIp+kYq7ZcNt4NXIghh1fNyo0jz76RvVqr8+dZJXGKRXixOEacrK9nNI2ebEYiMffSRD/ZIOfxArGdoLgtxGG0hxzpbiSRWZWdEZLWFGd1BGVEcjHGRkgDIzW7rB9m4DLx3il0xysUaRRDwAyEkI93gYfu1VGKdt9ixl2/tL21ieeS5s5kjUkqbaa2J9A4lk3PloNPtOHcQmjEr/ZrYsci2kjklkC42Dyq4AfzAUgdN6vcVT7ReW9sRmKDFxKNsZRv0Cn3fvj/AME+ddTiN6IVBwXkkOmOJThpH8h5AdS3RRkmnVrjqBhuM211Epae3KqOssDG5hG/iQodR5lkAHnXn3HnDDUpDKwyCCCCD0IPiK9/shIqIJGDyY7zKNKljudI8F8B44AzWW7V9gLa9DyQ4tbo5OpR+gkb/iRjYE/rrg+erGKUVG/9olua5PnufrUYq/xvhs9rPJb3CGOaM4ZTuPRlP3lI3BqiK1JEbsU0w1IaYaYAKniqAVPFSkSRNionWptVRvULJ0M00uKcDRTHR9EYpQKWiufREWiiigBKMUUtAhAKdSUUABpKWkoAKKWigCldO0MsdwvQDRIQM4XcqxxuQpJB8hIx8K7NlxyGcmJJI+eB8oYSYz0JCnOPwqmK4fCptEsDjo8cx9ysqkD6h3P41dDqhGv+zXB+a4Uf2IFX/EzVLFDKCMyhx4howCfYqRj8DTJ55jgQxowIB5kkmlcHyVQSx9Dp96kto5hvLIjH9WOMxr+bMSfqPan+gixRRRUBhTHlUFVJwXJA8iQM4z54BOPQ+VNmdwV0prBIDd4KQPMAjf29KiuyjMkTB8lkcERyFAUYOMuBpX5cbkdfUVJCLVBoqC7jlIBikVGHg6a0b3wQR7g/Q0kBQ4jLNaxSz83nLEjNy5I15jEfKiNGFAJOAMq25FcnspYNb3VxG5y5tLYs4GA0gluWlYD1aXP71Zr4q9qJFW3s01QXCyJNLghtIibVCVbGGBkUODj+i3AO1ecydquIfaI7pbuYzxBgHbQVKtjUjRgBSp0rkY+6D4CtuPTynCyDke+9nBre8uOpluWRT46IQEC/x80/vVgeH9uc390yujSmeWNYrjARoo3dY0glAzHkKpIwwJBOnfVS9lviPbw8MlWUkcQjNyyx6JNEskrvIjK24VQXAIYjGk+leWw24AAbvHA671Zh07bluIyZ9NcG4tHdR601KykB4nwJI2xnSwBI9iCQRuCav15B8L72Z5rTvZIM6SEnUzQj7RpVh6PHGQx8dQ+8c+v1izQ2SpFkXaPN/jhwVZLSK+VRzbaRY3bxMUhwAfPEhXHlqbzrxIV9T8d4YLu1ubVthcQugP6rEd1vo2k/Svlpo2VmRwVdGKsp6qynDA+xBFX4pXEXDA0w1IaiNTGAqeGoKnhpMZaVKUxVLGKeaqZpiuhWMVJy6ldqZqphR9B0UtFYSgSilooASiiloASilpKACilooASo7idI1LyOsaKMlnYKoHqTUtec/Ge6Iis4c7SSSOR4HlhQM/WTP0qzHDfJIUnSs7c3xD4YpKrLJIRnGiCYgnyB075rvQcFf7HAQRzoFXBIJGVTQSQOoOXB9GPiBXhnZK6t4rqKS7DtCjAgqNWlgcqzL1ZQd8DfIHXpX0twq8gmhSS3kSaEgaXRgynG3UePmOtaMkFj9JCEr5KPZviIlQoQVeM4KN8y+JHr1yD4gg12azvG+GPG4urXCypjKnIRlzuj4+6cnB+6TncEg9fhfEEuIxImQclWRtnRx8yMPMZHoQQRkEVU13RMt0VT4xfi3glnI1aF7qZC6mOyICehZiB9azI4vxLOTLZYye79km2HgNX2jf3x9BRGDl1ROGOU/SjZUVgOJduL61ZebZ280TkATR3EkI1HorKUfSTvjfB6ZycV0OC9voZ5o4JIJoHlOlXJjkiLeCllOoE+BK49abxSQpQlHlGvrl3HG4oYLie4/RC11cwdemChT9bWCuPVtPUGulLIqKzMwVVBJZiFUAbkknYD1rzztdby8ScLCimCRBiKRngacRklZA33NPMJVWxnVqJXAwY4qT6lbPJeO8Wlu7ia4l+eZyxUHIUdEjB8lUAeuM+Nc9FJOBXb4p2ZlicoiuHXc204EdwB5r92Vf2gcbdTXOjAGV3DDqCCrA+oO4+tdvG4tUikI0ApXbAJPgCaGYDc0/h0TTSHGywo0p2J3QZQEDc5bG3jpNTlLarA9c+E3C9KtMTnkoIcjOOa+mSfHh/VDI8dQ869Frj9j+DCxsba16vHGOYfORstIf4mb8q7FcHLLdJsuiqQV4R8YOAfZr77Sg/Q32X9FlXAkX0zs/rqbyr3euF227PLxGylt9hKMPC5+7Kvy7+AOSp9GNPFKmDPml6jJqe4jZCyOpR0ZlZW2ZWUkMp9QQR9KrmtYAKsQVWBqxBSfA0dSEbUTClg6UTVQzVHgqU7FAFSaaYUfQFFFFYzOFFFFACUopKWkAGkpaSgBRRQKKACvLfjQ36SxHklz+Zi/wAq9SrxH4i9oI766QQ4MNsHRZR/SFiNTD9nugDz3PiK0aZNzsryP4TNRDaunwTjV1ZSc20meFj8wGCj+jodm+oz5EVzwKK6BmPY+znxchfEfEIjA+w50IaSE+pTd09hq9xWlEqZ+3cOkiuImADrHIrI6jPdLDZWG+knocg7Hb53qazu5YX1wySROcDVE7RsfTKkZHpVTwrlFiyPufTqPBewMMcyGUFWQ5VgejKw6owPsQRXKPZUgnReThfBZEhkx6atIYj3OfMmvF+B9vuIWkxl5i3CnaSKRVXXjGMsgBDDoGwTg4OQBj1fgfxGt7m2kuTb3EaQ6uZvA6qVAYgEuCdiDkqPxqmWOcPTwXQzNcOiW77KXTq8bXFrNG6kFHtpYyQfDUJm/HTWXt+HJweZLnidxA/2dS0MMBeW4lcjQHZCqhQAxGT3SzA5XAB5/GPjC8moQRSW8WdmLRCZ+h3c6ljzuMBWPiGFZXjXap7mA2ywQwI7o8kgaSe4kZflLzOct9QTsN6tjGf8wTzya5NHN8SDdXKm7hxZBlKwKS5QjdZZANpmB304wMZALAE+hToJY1eJxkFZIpQdS5xscjqpBIOPBjivnkL7k+te69jFxw+0H/Dz+LEj6b1XqIqKTRDG7O9EbbiMXKuYlZ4yQ0b/ADo4G5VhurY3DKRkEEbGsr2h+HBYFoCLlRnEc7CO4XfpHcLjPoGA9Wrt3VqSwljOiZRgNvpYDfS4HUZ3B6qScdSG6fCOOByYphy5lxlW/I56Mp8GG3gcEEVXDJJdYk3FM8P4l2XMbhHlktnJ2iu49LHbJCOCFcDzXUPWtP8AD/sqefGC2tUlWaaRRhCI/wDYxE9d5MPjyR87EZ9hmiV10uqup+6wDL+BrO8FRba9nt1RI454w8aogRdUTESdNt1khIH7LeVXPUuUWiOw0tFFFYywKKRiACScAdSdhXMuJ5J/0duSkZ+e66beIh/Wb9v5R4Fj0klYjzX4x9kuvFLYZUnTcquDhl7om29tLeRAP6xryRjX1jy4IYSjCNLaONgwfHLEYB1as/dxnOa+aeL8iWSYwKUgMshiUliypqPLzq3zpxkH1FbMT3Irk9pws1YgNV2UgkHqDvU0FSZNM68B2pZTUcLbUsjVQ0bI8DFqWoFapQaKCz6ApKWg1iszCUUlLTAKKKUUgEpKdVa/voYE5k8scKD70jBB7b9TTSbCywKKwHGfijbR5W0je5b9dswxfmNR/Ae9YfivbfiVzkGcwof6O2BhX+LJf+ar46ab56FbyJG4+KPajkp9hgbE0y5lYdUjP3QfBm/Jc+YryuNMUigklmJJPUsSST6k9akrbjgoKkUSluYUUUVMiFaXsTe20TT82RYJ3j0wzuAUTrq3Oyn5dz1A/HNUUAartpdQSLGUlilmEg3jlS4Ij0HUHkUDI16SoO473QHA4tmrfZrpguULRKTrYYOob6eh2Yb/AN9c+r0F/ItvLCNOhmAOV7w1hjnP7v5j2qGS6VfNFuKrd/JnW7IX1tCJ+YwinYx6JSBjlggyIrEEIxweowe7vttxeKyo88rx/IzbYUKDsATgAAEkEnAAySRjNVaKsKhydR/dX0BwW05NtbwnrFDEh91UAn8RXz8rYORWn4b26v4cAyiVRjuzrzNv7QIcn3Y1RmxuapE8clHk9mqvd2qSABshl3V1OHU+an/kdj0IIrH8L+JED7XETxH9eM85PqAAw9gDWr4fxS3uATBNHLjroYEj3Xqp9CBWJ45w7GhSTJLbi81t3Zu9H4TAfo8eGsf0R9fl9RnTXSPE7dmSWRQGjJKvkHGQVO+3gSPrVXNca5sEhcyxwo6EkvGI1Mgz1ePbJ9U8eq75DSi0+Rmv4fxe3uCywyLIV66TqA9CRsDv061erj9nZkZSUIYMFKkHIK+np/nVni/GrW0XXdTxQA9NbgM3oq9WPoAaTj1pCfQvmqnFeJwWsTTXMqQxL1Zj4+AA6sT5DJrzftD8X41ynD4TIf6+4BSP3WMHU31015fxnjFzeSc66leZxnGrAVQeoRRgKPYb+Oauhgb9RCWRLg0/b7t/LxEmCENBZA/KdpJSOhkx0XOCE+pz0GMViDkU2itaikqRQ22Ou01DWvVeo9P/AKqvEasxPg1HJFpbA+U7j28v/wB6UpLoWY5dizGxpWJpYhTnWs7Nq4IVNTA0xRUwFA0fQVNeQCiisBQR88UnPFFFTAOePOqHGO0NrZpruJQmflUd6Rj5Kg3P9w8aKKsxQUp0xSdI84478T7mXK2kYtk/rHCyTH6HuL/N71i7qeWd+ZNJJK5+/IxdvYZ6D0G1JRXQjFR4RmcmxFjAp1FFSIhRRRQAUUUUAFFFFABUsR7kvtGfwcD+5jS0UmShz7MhooopkQooooAUGpIrhlIYEhh0YEhh7MNxS0UAafhHbu8hwrvz0H3Zu82PSQd7Pq2qtfw/t7aS4Ewa2bzfvRdPCQdB6sFooqueGEuxOM2jA3nabiFpJdWsFyyRNPK4eMguVlOsBJOoUhg3dxuTvXCklaRjI7M7t1d2LufdjufrRRU0qFJiUUUUyIUUUUAFTN3k/aTcf5UUUAmPgbIB86expaKzM6UeCNakzS0Uho//2Q==",
      title: "Get in Touch with Anim8",
      subtitle:
        "We'd love to hear from you! Reach out for any questions or support, and we’ll respond promptly.",
    },
    {
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*2IP0z6KSSo_-A1yjl7GOdA@2x.jpeg",
      title: "Send Us Your Ideas",
      subtitle:
        "Whether you're an animator or an animation fan, share your thoughts and ideas with Anim8!",
    },
    {
      image: "https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/275396189_10159370050339927_8447422815723996055_n.png?stp=dst-png_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fD3SbPk3po0Q7kNvgEOZEn3&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&_nc_gid=ANS6teIniRtrFfenxMpdzZ8&oh=00_AYAVeLgIvhCq0Hytq4Z6_aCMHtE7KXtw58WFyzIDw3Y_jw&oe=67442746",
      title: "Stay Connected with Anim8",
      subtitle:
        "Follow us on social media and never miss an update on our latest releases and projects.",
    },
  ];
  

  return (
    <div className="main-content pt-24">
      <Navbar />
      <Swiper
  modules={[Autoplay]} // Enable autoplay
  autoplay={{
    delay: 3000, // Slide change interval in milliseconds
    disableOnInteraction: false, // Keep autoplay active even after interaction
  }}
  loop
  spaceBetween={0}
  slidesPerView={1}
  className="h-[calc(100vh-70px)] md:h-80 lg:h-96" // Adjusted height for better view in mobile
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div
        className="relative bg-cover bg-center h-[calc(100vh-70px)] md:h-80 lg:h-96"
        style={{ backgroundImage: `url('${slide.image}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {slide.title}
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 md:mt-5">
            {slide.subtitle}
          </p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      <div className="main-content pt-20 flex justify-center">
        <div className="flex flex-col md:flex-row justify-center gap-12 p-6 md:p-10 max-w-6xl w-full">
          <section className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Contact Anim8</h2>
            {success && <p className="text-green-600 text-center">Message sent successfully!</p>}
            {error && <p className="text-red-600 text-center">Failed to send message. Please try again later.</p>}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-600 hover:to-purple-700'
                } transition duration-300 ease-in-out`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </section>

          <section className="w-full md:w-1/2 flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg">
            <h2 className="text-2xl text-white font-semibold mb-4">Follow Us</h2>
            <div className="flex gap-6">
              <Link to="https://www.instagram.com/anim8official">
                <FaInstagramSquare className="text-5xl text-white hover:text-pink-400 transition duration-300 transform hover:scale-110" />
              </Link>
              <Link to="/about">
                <PiYoutubeLogo className="text-5xl text-white hover:text-red-400 transition duration-300 transform hover:scale-110" />
              </Link>
              <Link to="https://www.threads.net/@anim8official">
                <SiThreads className="text-5xl text-white hover:text-gray-300 transition duration-300 transform hover:scale-110" />
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
 
    </div>
  );
};

export default ContactLoginPage;
