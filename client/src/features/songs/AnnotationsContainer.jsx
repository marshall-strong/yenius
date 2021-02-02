import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectVerseById } from "../verses/versesSlice";

import AnnotationSidebar from "./AnnotationSidebar";
import VerseComments from "../verses/VerseComments";

import { quoteLeft, quoteRight, xMark } from "../../app/iconmonstr";

import "../../stylesheets/AnnotationSidebar.scss";

const AnnotationsContainer = ({ verseId }) => {
  const verse = useSelector((state) => selectVerseById(state, verseId));
  if (!verse) {
    return null;
  }
  const markup = { __html: verse.body };
  return (
    <section>
      <h3>Yenius Annotations</h3>

      {/* <div dangerouslySetInnerHTML={markup} />
      <VerseComments verseId={verseId} />
      <Link to={`/songs/${verse.songId}`}> Close Annotations </Link> */}

      <div className="AnnotationSidebar" referent="current_referent">
        <div
          className="u-relative nganimate-fade_slide_from_left"
          ng-className="{'nganimate-fade_slide_from_left': referent}"
          position-beside="$ctrl.lyrics_positioning_target"
          position-for-maximum-visibility=":: true"
          click-outside="ctrl.close()"
          suppress-click-outside-if-handled=""
        >
          <div
            className="annotation_sidebar_unit ng-hide"
            ng-show="referent &amp;&amp; referent.stub"
          >
            <annotation-placeholder>
              <div
                className="placeholder annotation_placeholder annotation_placeholder--hide"
                ng-className="['annotation_placeholder', {'annotation_placeholder--hide': !showCondition}]"
              >
                <div className="annotation_label" ng-hide="noLabel">
                  {/* Genius Annotation */}
                  <span>
                    <Link to={`/songs/${verse.songId}`}>{xMark}</Link>
                  </span>
                </div>
                <div className="rich_text_formatting placeholder-pulsing_content u-top_margin">
                  <placeholder-text>
                    <p className="placeholder-text"></p>
                    {quoteLeft}
                    <div dangerouslySetInnerHTML={markup} />
                    {quoteRight}
                  </placeholder-text>
                </div>
              </div>
            </annotation-placeholder>
          </div>
          <div
            className="annotation_sidebar_arrow"
            position-beside="$ctrl.lyrics_positioning_target"
            apply-annotation-arrow-className=""
            ng-show="referent &amp;&amp; !referent.stub"
          >
            <svg
              src="left_arrow.svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10.87 21.32"
            >
              <path d="M9.37 21.32L0 10.66 9.37 0l1.5 1.32-8.21 9.34L10.87 20l-1.5 1.32"></path>
            </svg>
          </div>
          <div
            className="annotation_sidebar_unit"
            ng-className="{'annotation_sidebar_unit--verified': annotation.pinned}"
            empty-copy-content="referent.fragment_from_lyrics"
            show-arrow-at-offset=""
          >
            <annotation
              object="annotation"
              referent="referent"
              variants="{showAd: true}"
              on-dirty="ctrl.annotation_dirty = true"
              on-clean="ctrl.annotation_dirty = false"
            >
              <div
                className="annotation_label u-clickable"
                ng-className="{'u-clickable': !ctrl.annotation_is_unwritten()}"
                ng-if="ctrl.show_annotation_label() &amp;&amp; annotation.state !== 'pending'"
                ng-click="toggle_contributors()"
              >
                <span ng-if="!variants.isDescription">Genius Annotation</span>
              </div>

              <VerseComments verseId={verseId} />

              {/* <comments>
                <div
                  ng-hide="$ctrl.prevent_compose &amp;&amp; !$ctrl.visible_comments().length"
                  className="comments u-vertical_margins gray_container"
                  ng-className="{'gray_container': !$ctrl.variants.no_background}"
                >
                  <comment-form
                    ng-show="$ctrl.can_create_comment()"
                    on-save="$ctrl.save_comment(comment)"
                    save-text="Submit"
                    saving-text="Submitting"
                    textarea-placeholder="Suggest an improvement to earn IQ"
                    allow-reasons="$ctrl.allow_reasons"
                    show-reasons-by-default="$ctrl.commentable.state === 'pending'"
                    commentable="$ctrl.commentable"
                    on-dirty="$ctrl.on_dirty()"
                    on-clean="$ctrl.on_clean()"
                    className=""
                  >
                    <form
                      name="form"
                      ng-submit="form.$valid &amp;&amp; ctrl.save()"
                      ng-model-options="{updateOn: 'submit'}"
                      className="u-large_bottom_margin ng-pristine ng-invalid ng-invalid-required"
                      submit-on-cmd-enter=""
                      dirtyable=""
                    >
                      <div ng-if="allowReasons"></div>

                      <div ng-className="{'u-quarter_top_margin u-small_bottom_margin': ctrl.showing_full_form}">
                        <div className="square_input_with_avatar">
                          <div
                            className="square_input_with_avatar-avatar"
                            ng-if="!ctrl.showing_full_form &amp;&amp; ctrl.current_user"
                          >
                            <div
                              className="user_avatar user_avatar--small clipped_background_image"
                              clipped-background-image="ctrl.current_user.avatar.small.url"
                              style={{
                                backgroundImage:
                                  "https://assets.genius.com/images/default_avatar_100.png?1611700455",
                              }}
                            ></div>
                          </div>
                          <div className="square_input_with_caret square_input_with_avatar-input">
                            <textarea
                              className="square_input square_input--full_width square_input--single_line_height ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                              required="required"
                              placeholder="Suggest an improvement to earn IQ"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div ng-show="ctrl.showing_full_form" className="ng-hide">
                        <button
                          className="square_button square_button--green"
                          ng-className="{'square_button--waiting': saving}"
                          ng-disabled="saving"
                          type="submit"
                          ng-bind="saving ? savingText : saveText"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </comment-form>

                  <comment-list
                    commentable="commentable"
                    variants="{first_element_in_container: !$ctrl.can_create_comment()}"
                    intersperse-ads=""
                    comments="$ctrl.comments"
                  >
                    <div ng-repeat="comment in $ctrl.comments | filter:{_deleted:'!true'} track by comment.id">
                      <comment
                        object="comment"
                        variants="{first_element_in_container: $ctrl.variants.first_element_in_container &amp;&amp; $first}"
                      >
                        <div
                          className="comment"
                          ng-className="{
    'comment--animate_slide_down comment--animate_flash': comment._new,
    'comment--no_top_divider': variants.first_element_in_container,
    'comment--no_top_margin': variants.first_element_in_container
  }"
                        >
                          <user-badge-and-timestamp
                            size="x_small"
                            user="comment.author"
                            anonymous-user="comment.anonymous_author"
                            time="comment.created_at"
                            pinned-role="comment.pinned_role"
                          >
                            <div className="user_badge_and_timestamp">
                              <div className="user_badge_and_timestamp-badge">
                                <user-badge
                                  size="x_small"
                                  object="user"
                                  anonymous-user="anonymous_user"
                                  pinned-role="pinned_role"
                                  sponsor=":: sponsor"
                                  variants=":: variants"
                                >
                                  <a
                                    ng-href="https://genius.com/jerrck"
                                    className="user_badge drop-target"
                                    ng-if="user"
                                    tether-drop-target=""
                                    href="https://genius.com/jerrck"
                                  >
                                    <div
                                      ng-className=":: ['user_avatar', 'user_avatar--' + size]"
                                      clipped-background-image="avatar_url"
                                      className="user_avatar user_avatar--x_small clipped_background_image"
                                      // style='background-image: url("https://assets.genius.com/images/default_avatar_32.png?1611700455");'
                                    ></div>
                                    <div className="user_badge-text">
                                      <div
                                        className="user_badge-login_and_iq user_badge-login_and_iq--one_line"
                                        ng-className=":: {'user_badge-login_and_iq--one_line': !is_two_lines}"
                                      >
                                        <span className="user_badge-login">
                                          jerrck
                                        </span>

                                        <span
                                          className="user_badge-iq--one_line"
                                          ng-className=":: {
          'tag_label tag_label--yellow_background': is_two_lines,
          'user_badge-iq--one_line': !is_two_lines
        }"
                                          ng-if=":: !variants.hide_iq"
                                        >
                                          21
                                        </span>
                                      </div>
                                    </div>
                                    <tether-drop
                                      show-on="hover"
                                      ng-if=":: !disables_user_tooltips"
                                    ></tether-drop>
                                  </a>
                                </user-badge>
                              </div>
                              <div className="user_badge_and_timestamp-created_at">
                                <time-ago time="time" ng-if="time">
                                  <span
                                    title="Mar 23, 2017 11:57:21 PM"
                                    am-time-ago="time * 1000"
                                  >
                                    4 years ago
                                  </span>
                                </time-ago>
                              </div>
                            </div>
                          </user-badge-and-timestamp>

                          <a
                            className="comment-reason"
                            target="_blank"
                            rel="noreferrer"
                            ng-href="https://genius.com/8846441/Genius-how-genius-works/More-on-annotations"
                            ng-if="comment.reason"
                            href="https://genius.com/8846441/Genius-how-genius-works/More-on-annotations"
                          >
                            Marked this as
                            <span className="comment-reason-title">
                              missing something
                            </span>
                          </a>

                          <standard-rich-content
                            html="comment.body.html"
                            ng-show="!!comment.body.html"
                            className=""
                          >
                            <div
                              ng-className="{
    'article_rich_text_formatting': variants.article,
    'rich_text_formatting': !variants.article,
    'rich_text_formatting--large': variants.isLarge,
    'rich_text_formatting--no_vertical_margins': variants.no_vertical_margins,
  }"
                              ng-bind-html="trusted_html"
                              embedly=""
                              className="rich_text_formatting"
                            >
                              <p>
                                Kanye’s mother was buried in Marina del Ray.
                              </p>
                            </div>
                          </standard-rich-content>

                          <div ng-if="!is_removed()">
                            <voting
                              vote-total-clicked="toggle_voters()"
                              type="comment"
                              object="comment"
                              on-unauthorized="ctrl.prompt_auth = true"
                              variants="{'hide_upvote_text': true}"
                            >
                              <div className="voting">
                                <div
                                  className="voting-button voting-upvote square_button square_button--transparent square_button--depress_on_click"
                                  ng-className="{'voting-upvote--active': voteable.current_user_metadata.interactions.vote === 'up'}"
                                  ng-click="ctrl.submit_vote('up')"
                                >
                                  <svg
                                    className="inline_icon inline_icon--reading_size inline_icon--up_1"
                                    src="thumbs_up.svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 21.62 21.36"
                                  >
                                    <path d="M16.52 21.29H6V8.5l.84-.13a3.45 3.45 0 0 0 1.82-1.09 13.16 13.16 0 0 0 .82-1.85c1.06-2.69 2-4.78 3.52-5.31a2.06 2.06 0 0 1 1.74.17c2.5 1.42 1 5 .16 6.95-.11.27-.25.6-.31.77a.78.78 0 0 0 .6.36h4.1a2.29 2.29 0 0 1 2.37 2.37c0 .82-1.59 5.4-2.92 9.09a2.39 2.39 0 0 1-2.22 1.46zm-8.52-2h8.56a.48.48 0 0 0 .31-.17c1.31-3.65 2.73-7.82 2.79-8.44 0-.22-.1-.32-.37-.32h-4.1A2.61 2.61 0 0 1 12.54 8 4.29 4.29 0 0 1 13 6.46c.45-1.06 1.64-3.89.7-4.43-.52 0-1.3 1.4-2.38 4.14a10 10 0 0 1-1.13 2.38A5.28 5.28 0 0 1 8 10.11zM0 8.4h4.86v12.96H0z"></path>
                                  </svg>
                                </div>
                                <div
                                  ng-if="voteable.has_voters"
                                  className="voting-total square_button square_button--transparent voting-total--positive"
                                  ng-className="{
      'voting-total--positive': voteable.votes_total > 0,
      'voting-total--negative': voteable.votes_total < 0,
      'voting-total--animate_press': !!voteable.current_user_metadata.interactions.vote
    }"
                                  ng-click="voteTotalClicked()"
                                >
                                  +6
                                </div>
                                <div
                                  ng-if="!variants.hide_downvote"
                                  className="voting-button voting-downvote square_button square_button--transparent square_button--depress_on_click"
                                  ng-className="{'voting-downvote--active': voteable.current_user_metadata.interactions.vote === 'down'}"
                                  ng-click="ctrl.submit_vote('down')"
                                >
                                  <svg
                                    className="inline_icon inline_icon--reading_size inline_icon--up_1"
                                    src="thumbs_down.svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 21.62 21.36"
                                  >
                                    <path d="M8 21.36a2.12 2.12 0 0 1-1.06-.29c-2.5-1.42-1-5-.16-6.95.11-.27.25-.6.31-.77a.78.78 0 0 0-.6-.36H2.37A2.29 2.29 0 0 1 0 10.64c0-.82 1.59-5.4 2.92-9.09A2.39 2.39 0 0 1 5.1.07h10.56v12.79l-.84.13A3.45 3.45 0 0 0 13 14.08a13.16 13.16 0 0 0-.82 1.85c-1.06 2.69-2 4.79-3.49 5.31a2.06 2.06 0 0 1-.69.12zM5.1 2.07a.48.48 0 0 0-.31.17C3.48 5.89 2.07 10.06 2 10.68c0 .22.1.32.37.32h4.1a2.61 2.61 0 0 1 2.61 2.4 4.29 4.29 0 0 1-.48 1.51c-.46 1.09-1.65 3.89-.7 4.42.52 0 1.3-1.4 2.38-4.14a10 10 0 0 1 1.13-2.38 5.27 5.27 0 0 1 2.25-1.56V2.07zM16.76 0h4.86v12.96h-4.86z"></path>
                                  </svg>
                                </div>
                              </div>
                            </voting>

                            <div className="u-float_right"></div>
                          </div>
                        </div>
                      </comment>
                    </div>
                  </comment-list>
                </div>
              </comments> */}
            </annotation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnotationsContainer;
