"use client";

import React from "react";
import Head from "next/head";
import { GetStartedButton } from "../components/CustomButton";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import UserDetailsForm from "../components/UserDetailsForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Granularity | Ask efficiently and analyze effectively with forms.
        </title>
        <meta
          name="description"
          content="Craft beautiful, interactive experiences using forms and get more responses. Simplest no code form builder in town. Sign up for FREE!"
        />
        <link rel="icon" href="/logo_192.svg" />
        <meta
          property="og:title"
          content="Granularity | Ask efficiently and analyze effectively with forms."
        />
        <meta property="og:image" content="/og_image.svg" />
        <meta
          property="og:description"
          content="Craft beautiful, interactive experiences using forms and get more responses. Simplest no code form builder in town. Sign up for FREE!"
        />
      </Head>

      <NavBar />

      <div className={styles["landing-container"]}>
        <div className={styles["landing-container-header-container"]}>
          <div
            className={styles["landing-container-hero-description-container"]}
          >
            <div className={styles["landing-container-header-text"]}>
              Asking made simple
            </div>

            <div className={styles["landing-container-header-description"]}>
              Ask efficiently and analyze effectively with forms, surveys,
              quizzes and more.
            </div>

            <div
              className={styles["landing-container-header-description-small"]}
            >
              Craft a simple and effective form in less than 2 minutes!
            </div>

            <div>
              <GetStartedButton />
            </div>
          </div>
        </div>

        <div className={styles["landing-container-step"]}>
          <div className={styles["landing-container-text-container"]}>
            <div className={styles["landing-container-step-header-text"]}>
              Craft an experience that people will enjoy
            </div>

            <div
              className={styles["landing-container-step-header-description"]}
            >
              Let people focus on one question at a time
            </div>
          </div>

          <img src="/images/Question.svg" alt="" width="50%" />
        </div>

        <div className={styles["landing-container-step"]}>
          <img src="/images/Insights.svg" alt="" width="50%" />

          <div className={styles["landing-container-text-container"]}>
            <div className={styles["landing-container-step-header-text"]}>
              Dig deeper with insights
            </div>

            <div
              className={styles["landing-container-step-header-description"]}
            >
              Analyze at a glance how your form is performing (total views,
              completions, completion rate, views per question...)
            </div>
          </div>
        </div>

        <div className={styles["landing-container-step"]}>
          <div className={styles["landing-container-text-container"]}>
            <div className={styles["landing-container-step-header-text"]}>
              Take a glance at responses
            </div>

            <div
              className={styles["landing-container-step-header-description"]}
            >
              See what people are responding, also receive email notifications
              so that you are always in the loop and never miss out on any
              response.
            </div>
          </div>

          <img src="/images/Responses.svg" alt="" width="50%" />
        </div>

        <div
          className={styles["landing-container-example-form-root-container"]}
        >
          <div className={styles["landing-container-example-form-container"]}>
            <UserDetailsForm />
          </div>
        </div>

        <div className={styles["landing-container-features-container"]}>
          <div className={styles["landing-container-feature-row"]}>
            <div className={styles["landing-container-feature"]}>
              {/* <div className={styles["landing-container-feature-image"]}>
              <img src="" alt="" />
            </div> */}
              <div className={styles["landing-container-feature-header"]}>
                Save time
              </div>
              <div className={styles["landing-container-feature-description"]}>
                We understand that you are busy, Granularity helps you to create
                intuitive and interactive forms in minutes.
              </div>
            </div>

            <div className={styles["landing-container-feature"]}>
              {/* <div className={styles["landing-container-feature-image"]}>
              <img src="" alt="" />
            </div> */}
              <div className={styles["landing-container-feature-header"]}>
                It has all the inputs you need
              </div>
              <div className={styles["landing-container-feature-description"]}>
                Granularity provides all the basic input&apos;s your form will
                need (text, number, email, dropdown, multiple choice, yes/no...)
              </div>
            </div>
          </div>

          <div className={styles["landing-container-feature-row"]}>
            <div className={styles["landing-container-feature"]}>
              {/* <div className={styles["landing-container-feature-image"]}>
              <img src="" alt="" />
            </div> */}
              <div className={styles["landing-container-feature-header"]}>
                The simplest form builder in town
              </div>
              <div className={styles["landing-container-feature-description"]}>
                Simple interface to create forms, just select the type of
                question, tune settings according to your requirement and
                publish your form to the world.
              </div>
            </div>

            <div className={styles["landing-container-feature"]}>
              {/* <div className={styles["landing-container-feature-image"]}>
              <img src="" alt="" />
            </div> */}
              <div className={styles["landing-container-feature-header"]}>
                Embed your form anywhere
              </div>
              <div className={styles["landing-container-feature-description"]}>
                Granularity helps you to embed your form in an external website
                with a few lines of code.
              </div>
            </div>
          </div>
        </div>

        <div className={styles["landing-container-footer-container"]}>
          <div
            className={styles["landing-container-footer-description-container"]}
          >
            <div className={styles["landing-container-footer-text"]}>
              Start crafting your form now!
            </div>

            <div style={{ marginBottom: "8%" }}>
              <GetStartedButton />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
