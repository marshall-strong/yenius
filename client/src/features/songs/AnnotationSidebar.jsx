// import React from "react";

// import "../../stylesheets/AnnotationSidebar.scss";

// const AnnotationSidebar = () => {
//   return (
//     <div className="AnnotationSidebar" referent="current_referent">
//       <div
//         className="annotation_sidebar_arrow"
//         position-beside="$ctrl.lyrics_positioning_target"
//         apply-annotation-arrow-className=""
//         ng-show="referent &amp;&amp; !referent.stub"
//       >
//         <svg
//           src="left_arrow.svg"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 10.87 21.32"
//         >
//           <path d="M9.37 21.32L0 10.66 9.37 0l1.5 1.32-8.21 9.34L10.87 20l-1.5 1.32"></path>
//         </svg>
//       </div>

//       <div
//         className="u-relative nganimate-fade_slide_from_left"
//         ng-className="{'nganimate-fade_slide_from_left': referent}"
//         position-beside="$ctrl.lyrics_positioning_target"
//         position-for-maximum-visibility=":: true"
//         click-outside="ctrl.close()"
//         suppress-click-outside-if-handled=""
//       >
//         <div
//           className="annotation_sidebar_unit ng-hide"
//           ng-show="referent &amp;&amp; referent.stub"
//         >
//           <annotation-placeholder>
//             <div
//               className="placeholder annotation_placeholder annotation_placeholder--hide"
//               ng-className="['annotation_placeholder', {'annotation_placeholder--hide': !showCondition}]"
//             >
//               <div className="annotation_label" ng-hide="noLabel">
//                 Genius Annotation
//               </div>
//               <div className="rich_text_formatting placeholder-pulsing_content u-top_margin">
//                 <placeholder-text>
//                   <p className="placeholder-text"></p>
//                   <div className="placeholder-text-line placeholder-text-line--short"></div>
//                   <div className="placeholder-text-line placeholder-text-line--long"></div>
//                   <div className="placeholder-text-line placeholder-text-line--medium"></div>
//                   <p></p>
//                 </placeholder-text>
//               </div>
//             </div>
//           </annotation-placeholder>
//         </div>

//         <div
//           ng-if="referent &amp;&amp; !ctrl.referent_creation_failed"
//           ng-repeat="annotation in referent.annotations | filter:{_deleted: '!'} track by annotation.id"
//           className="annotation_sidebar_unit"
//           ng-className="{'annotation_sidebar_unit--verified': annotation.pinned}"
//           empty-copy-content="referent.fragment_from_lyrics"
//           show-arrow-at-offset=""
//         >
//           <annotation
//             object="annotation"
//             referent="referent"
//             variants="{showAd: true}"
//             on-dirty="ctrl.annotation_dirty = true"
//             on-clean="ctrl.annotation_dirty = false"
//           >
//             <div
//               className="annotation_label u-clickable"
//               ng-className="{'u-clickable': !ctrl.annotation_is_unwritten()}"
//               ng-if="ctrl.show_annotation_label() &amp;&amp; annotation.state !== 'pending'"
//               ng-click="toggle_contributors()"
//             >
//               <span ng-if="!variants.isDescription">Genius Annotation</span>
//               <span
//                 className="annotation_label-underline"
//                 ng-if="!ctrl.annotation_is_unwritten()"
//               >
//                 4 contributors
//               </span>
//             </div>

//             <standard-rich-content
//               html="annotation.body.html"
//               ng-show="!annotation._editing._form_visible &amp;&amp; !ctrl.annotation_is_unwritten() &amp;&amp; !ctrl.content_is_truncated"
//               watch-images-loaded="annotation.body.html"
//               open-links-in-new-window=""
//               handle-intra-page-links=""
//               className=""
//             >
//               <div
//                 ng-className="{
//                   'article_rich_text_formatting': variants.article,
//                   'rich_text_formatting': !variants.article,
//                   'rich_text_formatting--large': variants.isLarge,
//                   'rich_text_formatting--no_vertical_margins': variants.no_vertical_margins,
//                 }"
//                 ng-bind-html="trusted_html"
//                 embedly=""
//                 className="rich_text_formatting"
//               >
//                 <p>
//                   The{" "}
//                   <a
//                     href="https://en.wikipedia.org/wiki/Puerto_Rican_Day_Parade"
//                     rel="noopener nofollow"
//                   >
//                     Puerto Rican Day Parade
//                   </a>{" "}
//                   is an event held in major cities (including Los Angeles where
//                   Kanye lives) across the United States every year to honor
//                   Puerto Ricans living in the U.S.. Marina Del Rey is home to
//                   over 5,000 boats and is situated next to Los Angeles
//                   International Airport.
//                 </p>

//                 <p>
//                   Kanye is using both the parade and the marina to describe how
//                   his whip is “floatin.” This verb is often used by rappers to
//                   describe the feeling of cruising in a smooth luxury car.
//                   Parades have “floats” in them; “boats” float. Drake uses
//                   “floating” in this way on the hook from{" "}
//                   <a
//                     href="https://genius.com/Drake-used-to-lyrics"
//                     rel="noopener"
//                     data-api_path="/songs/685070"
//                   >
//                     “Used 2”
//                   </a>{" "}
//                   and Raekwon uses it at the end of{" "}
//                   <a
//                     href="https://genius.com/Raekwon-criminology-lyrics"
//                     rel="noopener"
//                     data-api_path="/songs/3682"
//                   >
//                     “Criminology"
//                   </a>{" "}
//                   to describe driving an Acura:
//                 </p>

//                 <blockquote>
//                   <p>Sneakers stay jet black floating in the flyest Ac'</p>
//                 </blockquote>

//                 <p>
//                   <img
//                     src="https://images.rapgenius.com/18e1238ffa1089a2e3925b6313e14b2e.634x376x1.jpg"
//                     alt=""
//                     width="634"
//                     height="376"
//                     data-animated="false"
//                   />
//                 </p>
//               </div>
//             </standard-rich-content>

//             <div
//               ng-if="annotation.body.html"
//               ng-hide="variants.hide_moderation || annotation.needs_exegesis || annotation._editing._form_visible || annotation.deleted"
//               className="u-vertical_margins"
//             >
//               <kb
//                 shortcut="shift+e"
//                 action="start_editing({proposed_edit: true})"
//                 ng-if="can('propose_edit_to')"
//               ></kb>
//               <button
//                 ng-click="start_editing({proposed_edit: true})"
//                 ng-if="can('propose_edit_to') &amp;&amp; !ctrl.content_is_truncated"
//                 title="shortcut: shift+e"
//                 className="square_button"
//               >
//                 Edit
//               </button>
//             </div>

//             <div
//               ng-if="!ctrl.annotation_is_unwritten() &amp;&amp; !variants.hide_social"
//               className="u-vertical_margins"
//             >
//               <voting
//                 vote-total-clicked="toggle_voters()"
//                 type="annotation"
//                 object="annotation"
//                 on-unauthorized="ctrl.prompt_auth = true"
//                 variants="{'hide_upvote_text': ctrl.content_is_truncated}"
//               >
//                 <div className="voting">
//                   <div
//                     className="voting-button voting-upvote square_button square_button--transparent square_button--depress_on_click"
//                     ng-className="{'voting-upvote--active': voteable.current_user_metadata.interactions.vote === 'up'}"
//                     ng-click="ctrl.submit_vote('up')"
//                   >
//                     <svg
//                       className="inline_icon inline_icon--reading_size inline_icon--up_1"
//                       src="thumbs_up.svg"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 21.62 21.36"
//                     >
//                       <path d="M16.52 21.29H6V8.5l.84-.13a3.45 3.45 0 0 0 1.82-1.09 13.16 13.16 0 0 0 .82-1.85c1.06-2.69 2-4.78 3.52-5.31a2.06 2.06 0 0 1 1.74.17c2.5 1.42 1 5 .16 6.95-.11.27-.25.6-.31.77a.78.78 0 0 0 .6.36h4.1a2.29 2.29 0 0 1 2.37 2.37c0 .82-1.59 5.4-2.92 9.09a2.39 2.39 0 0 1-2.22 1.46zm-8.52-2h8.56a.48.48 0 0 0 .31-.17c1.31-3.65 2.73-7.82 2.79-8.44 0-.22-.1-.32-.37-.32h-4.1A2.61 2.61 0 0 1 12.54 8 4.29 4.29 0 0 1 13 6.46c.45-1.06 1.64-3.89.7-4.43-.52 0-1.3 1.4-2.38 4.14a10 10 0 0 1-1.13 2.38A5.28 5.28 0 0 1 8 10.11zM0 8.4h4.86v12.96H0z"></path>
//                     </svg>
//                     <span ng-if="!variants.hide_upvote_text">Upvote</span>
//                   </div>
//                   <div
//                     ng-if="voteable.has_voters"
//                     className="voting-total square_button square_button--transparent voting-total--positive"
//                     ng-className="{
//       'voting-total--positive': voteable.votes_total > 0,
//       'voting-total--negative': voteable.votes_total < 0,
//       'voting-total--animate_press': !!voteable.current_user_metadata.interactions.vote
//     }"
//                     ng-click="voteTotalClicked()"
//                   >
//                     +71
//                   </div>
//                   <div
//                     ng-if="!variants.hide_downvote"
//                     className="voting-button voting-downvote square_button square_button--transparent square_button--depress_on_click"
//                     ng-className="{'voting-downvote--active': voteable.current_user_metadata.interactions.vote === 'down'}"
//                     ng-click="ctrl.submit_vote('down')"
//                   >
//                     <svg
//                       className="inline_icon inline_icon--reading_size inline_icon--up_1"
//                       src="thumbs_down.svg"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 21.62 21.36"
//                     >
//                       <path d="M8 21.36a2.12 2.12 0 0 1-1.06-.29c-2.5-1.42-1-5-.16-6.95.11-.27.25-.6.31-.77a.78.78 0 0 0-.6-.36H2.37A2.29 2.29 0 0 1 0 10.64c0-.82 1.59-5.4 2.92-9.09A2.39 2.39 0 0 1 5.1.07h10.56v12.79l-.84.13A3.45 3.45 0 0 0 13 14.08a13.16 13.16 0 0 0-.82 1.85c-1.06 2.69-2 4.79-3.49 5.31a2.06 2.06 0 0 1-.69.12zM5.1 2.07a.48.48 0 0 0-.31.17C3.48 5.89 2.07 10.06 2 10.68c0 .22.1.32.37.32h4.1a2.61 2.61 0 0 1 2.61 2.4 4.29 4.29 0 0 1-.48 1.51c-.46 1.09-1.65 3.89-.7 4.42.52 0 1.3-1.4 2.38-4.14a10 10 0 0 1 1.13-2.38 5.27 5.27 0 0 1 2.25-1.56V2.07zM16.76 0h4.86v12.96h-4.86z"></path>
//                     </svg>
//                   </div>
//                 </div>
//               </voting>

//               <div className="u-float_right">
//                 <pyong-button
//                   ng-if="!ctrl.content_is_truncated"
//                   type="annotation"
//                   object="annotation"
//                   variants="{'transparent': true, 'purple': true}"
//                   on-unauthorized="ctrl.prompt_auth = true"
//                 >
//                   <div
//                     className="pyong_button square_button drop-target square_button--transparent nganimate-disable_transition square_button--purple square_button--depress_on_click"
//                     ng-click="ctrl.pyong()"
//                     ng-disabled="ctrl.pyonged()"
//                     ng-className="{
//     'square_button--transparent nganimate-disable_transition': variants.transparent,
//     'square_button--purple': variants.purple,
//     'square_button--disabled': ctrl.pyonged(),
//     'square_button--depress_on_click': !ctrl.pyonged(),
//   }"
//                     tether-drop-target=""
//                     // style=""
//                   >
//                     <span ng-className="{'nganimate-cycle_upwards': ctrl.clicked_pyong}">
//                       <svg
//                         className="inline_icon inline_icon--reading_size inline_icon--up_1"
//                         src="lightning.svg"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 11.37 22"
//                       >
//                         <path d="M0 7l6.16-7 3.3 7H6.89S5.5 12.1 5.5 12.17h5.87L6.09 22l.66-7H.88l2.89-8z"></path>
//                       </svg>
//                     </span>
//                     <span ng-bind="pyongable.pyongs_count"></span>

//                     <tether-drop
//                       position="bottom center"
//                       ng-if="!ctrl.show_pyong_form"
//                       show-on="hover"
//                     ></tether-drop>
//                   </div>
//                 </pyong-button>
//                 <div
//                   ng-if="!ctrl.content_is_truncated"
//                   className="square_button square_button--transparent square_button--gray"
//                   ng-click="toggle_ellipsis_menu()"
//                 >
//                   <svg
//                     src="share.svg"
//                     className="inline_icon inline_icon--reading_size inline_icon--up_2 inline_icon--gray square_button-right_icon_margin"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 17.94 22"
//                   >
//                     <path d="M16.03 7.39v12.7H1.91V7.39H0V22h17.94V7.39h-1.91"></path>
//                     <path d="M8.08 3.7v11.81h1.91V3.63l2.99 2.98 1.35-1.35L9.07 0 3.61 5.46l1.36 1.35L8.08 3.7"></path>
//                   </svg>
//                   Share
//                 </div>
//                 <div
//                   className="square_button square_button--transparent square_button--gray drop-target"
//                   tether-drop-target=""
//                 >
//                   <svg
//                     src="down_arrow.svg"
//                     className="inline_icon inline_icon--up_1 inline_icon--short inline_icon--gray"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 21.32 10.91"
//                   >
//                     <path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path>
//                   </svg>

//                   <tether-drop
//                     show-on="click"
//                     position="bottom center"
//                   ></tether-drop>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="u-vertical_margins ng-hide"
//               ng-show="showing_ellipsis_menu"
//             >
//               <annotation-share-menu
//                 annotation="annotation"
//                 variants="variants"
//               >
//                 <div className="ellipsis_menu gray_container">
//                   <div className="u-bottom_margin">
//                     <facebook-share-button
//                       url="$ctrl.annotation.share_url"
//                       variants="{ 'showText': true }"
//                     >
//                       <a
//                         ng-click="$ctrl.share_on_facebook()"
//                         className="square_button square_button--facebook"
//                         ng-className="{
//     'square_button--transparent square_button--facebook_inverse nganimate-disable_transition': $ctrl.variants.transparent,
//     'square_button--facebook': !$ctrl.variants.transparent
//   }"
//                       >
//                         <svg
//                           className="inline_icon"
//                           src="facebook.svg"
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 9.95 20"
//                         >
//                           <path d="M8.09 3.81c-1.4 0-1.58.84-1.58 1.67v1.3h3.35L9.49 11h-3v9H2.33v-9H0V6.88h2.42V3.81C2.42 1.3 3.81 0 6.6 0H10v3.81z"></path>
//                         </svg>
//                         <span ng-if="$ctrl.variants.showText">Share</span>
//                       </a>
//                     </facebook-share-button>
//                     <twitter-share-button
//                       url="$ctrl.annotation.share_url"
//                       variants="{ 'showText': true }"
//                       message="$ctrl.annotation.twitter_share_message"
//                     >
//                       <a
//                         ng-click="$ctrl.share_on_twitter()"
//                         className="square_button square_button--twitter"
//                         ng-className="{
//     'square_button--transparent square_button--twitter_inverse nganimate-disable_transition': $ctrl.variants.transparent,
//     'square_button--twitter': !$ctrl.variants.transparent
//   }"
//                       >
//                         <svg
//                           className="inline_icon"
//                           src="twitter.svg"
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 16.43"
//                         >
//                           <path d="M20 1.89l-2.3 2.16v.68a12.28 12.28 0 0 1-3.65 8.92c-5 5.13-13.1 1.76-14.05.81 0 0 3.78.14 5.81-1.76A4.15 4.15 0 0 1 2.3 9.86h2S.81 9.05.81 5.81A11 11 0 0 0 3 6.35S-.14 4.05 1.49.95a11.73 11.73 0 0 0 8.37 4.19A3.69 3.69 0 0 1 13.51 0a3.19 3.19 0 0 1 2.57 1.08 12.53 12.53 0 0 0 3.24-.81l-1.75 1.89A10.46 10.46 0 0 0 20 1.89z"></path>
//                         </svg>
//                         <span ng-if="$ctrl.variants.showText">Tweet</span>
//                       </a>
//                     </twitter-share-button>
//                   </div>
//                   <div className="ellipsis_menu-row">
//                     <label
//                       htmlFor="share_url_8664200"
//                       className="text_label ellipsis_menu-label"
//                     >
//                       Share URL
//                     </label>
//                     <input
//                       id="share_url_8664200"
//                       className="square_input ellipsis_menu-input"
//                       value="https://genius.com/8664200"
//                       readOnly=""
//                       select-all-on-click=""
//                     />
//                     <div
//                       className="square_button"
//                       copy-to-clipboard="$ctrl.annotation.share_url"
//                       text-to-show-after-copy="Copied!"
//                     >
//                       Copy
//                     </div>
//                   </div>
//                   <div className="ellipsis_menu-row">
//                     <label
//                       htmlFor="embed_content_8664200"
//                       className="text_label ellipsis_menu-label"
//                     >
//                       Embed
//                     </label>
//                     <input
//                       id="embed_content_8664200"
//                       className="square_input ellipsis_menu-input"
//                       value="<blockquote class='rg_standalone_container' data-src='//genius.com/annotations/8664200/standalone_embed'><a href='https://genius.com/8664200/Kanye-west-famous/I-be-puerto-rican-day-parade-floatin-that-benz-marina-del-rey-coastin'>I be Puerto Rican day parade floatin&amp;#39;&amp;lt;br&amp;gt; That Benz Marina Del Rey coastin&amp;#39;</a><br><a href='https://genius.com/Kanye-west-famous-lyrics'>&amp;#8213; Kanye&nbsp;West (Ft.&nbsp;Rihanna) – Famous</a></blockquote><script async crossorigin src='//genius.com/annotations/load_standalone_embeds.js'></script>"
//                       readOnly=""
//                       select-all-on-click=""
//                     />
//                     <div
//                       className="square_button"
//                       copy-to-clipboard="$ctrl.annotation.embed_content"
//                       text-to-show-after-copy="Copied!"
//                     >
//                       Copy
//                     </div>
//                   </div>
//                 </div>
//               </annotation-share-menu>
//             </div>

//             <comments
//               ng-if="ctrl.should_show_comments() &amp;&amp; !focused_comments"
//               prevent-compose="annotation.needs_exegesis"
//               allow-reasons="!annotation.verified &amp;&amp; !variants.isDescription"
//               are-suggestions="!annotation.verified"
//               type="annotations"
//               commentable="annotation"
//               context-updated-at="context_updated_at"
//               on-dirty="on_dirty()"
//               on-clean="on_clean()"
//             >
//               <div
//                 ng-hide="$ctrl.prevent_compose &amp;&amp; !$ctrl.visible_comments().length"
//                 className="comments u-vertical_margins gray_container"
//                 ng-className="{'gray_container': !$ctrl.variants.no_background}"
//               >
//                 <comment-form
//                   ng-show="$ctrl.can_create_comment()"
//                   on-save="$ctrl.save_comment(comment)"
//                   save-text="Submit"
//                   saving-text="Submitting"
//                   textarea-placeholder="Suggest an improvement to earn IQ"
//                   allow-reasons="$ctrl.allow_reasons"
//                   show-reasons-by-default="$ctrl.commentable.state === 'pending'"
//                   commentable="$ctrl.commentable"
//                   on-dirty="$ctrl.on_dirty()"
//                   on-clean="$ctrl.on_clean()"
//                   className=""
//                 >
//                   <form
//                     name="form"
//                     ng-submit="form.$valid &amp;&amp; ctrl.save()"
//                     ng-model-options="{updateOn: 'submit'}"
//                     className="u-large_bottom_margin ng-pristine ng-invalid ng-invalid-required"
//                     submit-on-cmd-enter=""
//                     dirtyable=""
//                   >
//                     <div ng-if="allowReasons"></div>

//                     <div ng-className="{'u-quarter_top_margin u-small_bottom_margin': ctrl.showing_full_form}">
//                       <div className="square_input_with_avatar">
//                         <div
//                           className="square_input_with_avatar-avatar"
//                           ng-if="!ctrl.showing_full_form &amp;&amp; ctrl.current_user"
//                         >
//                           <div
//                             className="user_avatar user_avatar--small clipped_background_image"
//                             clipped-background-image="ctrl.current_user.avatar.small.url"
//                             // style='background-image: url("https://assets.genius.com/images/default_avatar_100.png?1611700455");'
//                           ></div>
//                         </div>
//                         <div className="square_input_with_caret square_input_with_avatar-input">
//                           <textarea
//                             mentionable=""
//                             ng-required="ctrl.body_is_required()"
//                             ng-model="comment.body.markdown"
//                             ng-model-options="{updateOn: 'default'}"
//                             focus-on-change="comment.reason"
//                             className="square_input square_input--full_width square_input--single_line_height ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
//                             ng-attr-placeholder="{{ textareaPlaceholder }}{{ ctrl.body_is_required() ? '' : ' (optional)' }}"
//                             ng-focus="ctrl.show_full_form()"
//                             autosize-init-on-focus=""
//                             required="required"
//                             placeholder="Suggest an improvement to earn IQ"
//                           ></textarea>
//                         </div>
//                       </div>
//                     </div>

//                     <div ng-show="ctrl.showing_full_form" className="ng-hide">
//                       <button
//                         className="square_button square_button--green"
//                         ng-className="{'square_button--waiting': saving}"
//                         ng-disabled="saving"
//                         type="submit"
//                         ng-bind="saving ? savingText : saveText"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </form>
//                 </comment-form>

//                 <comment-list
//                   commentable="commentable"
//                   variants="{first_element_in_container: !$ctrl.can_create_comment()}"
//                   intersperse-ads=""
//                   comments="$ctrl.comments"
//                 >
//                   <div ng-repeat="comment in $ctrl.comments | filter:{_deleted:'!true'} track by comment.id">
//                     <comment
//                       object="comment"
//                       variants="{first_element_in_container: $ctrl.variants.first_element_in_container &amp;&amp; $first}"
//                     >
//                       <div
//                         className="comment"
//                         ng-className="{
//     'comment--animate_slide_down comment--animate_flash': comment._new,
//     'comment--no_top_divider': variants.first_element_in_container,
//     'comment--no_top_margin': variants.first_element_in_container
//   }"
//                       >
//                         <user-badge-and-timestamp
//                           size="x_small"
//                           user="comment.author"
//                           anonymous-user="comment.anonymous_author"
//                           time="comment.created_at"
//                           pinned-role="comment.pinned_role"
//                         >
//                           <div className="user_badge_and_timestamp">
//                             <div className="user_badge_and_timestamp-badge">
//                               <user-badge
//                                 size="x_small"
//                                 object="user"
//                                 anonymous-user="anonymous_user"
//                                 pinned-role="pinned_role"
//                                 sponsor=":: sponsor"
//                                 variants=":: variants"
//                               >
//                                 <a
//                                   ng-href="https://genius.com/jerrck"
//                                   className="user_badge drop-target"
//                                   ng-if="user"
//                                   tether-drop-target=""
//                                   href="https://genius.com/jerrck"
//                                 >
//                                   <div
//                                     ng-className=":: ['user_avatar', 'user_avatar--' + size]"
//                                     clipped-background-image="avatar_url"
//                                     className="user_avatar user_avatar--x_small clipped_background_image"
//                                     // style='background-image: url("https://assets.genius.com/images/default_avatar_32.png?1611700455");'
//                                   ></div>
//                                   <div className="user_badge-text">
//                                     <div
//                                       className="user_badge-login_and_iq user_badge-login_and_iq--one_line"
//                                       ng-className=":: {'user_badge-login_and_iq--one_line': !is_two_lines}"
//                                     >
//                                       <span className="user_badge-login">
//                                         jerrck
//                                       </span>

//                                       <span
//                                         className="user_badge-iq--one_line"
//                                         ng-className=":: {
//           'tag_label tag_label--yellow_background': is_two_lines,
//           'user_badge-iq--one_line': !is_two_lines
//         }"
//                                         ng-if=":: !variants.hide_iq"
//                                       >
//                                         21
//                                       </span>
//                                     </div>
//                                   </div>
//                                   <tether-drop
//                                     show-on="hover"
//                                     ng-if=":: !disables_user_tooltips"
//                                   ></tether-drop>
//                                 </a>
//                               </user-badge>
//                             </div>
//                             <div className="user_badge_and_timestamp-created_at">
//                               <time-ago time="time" ng-if="time">
//                                 <span
//                                   title="Mar 23, 2017 11:57:21 PM"
//                                   am-time-ago="time * 1000"
//                                 >
//                                   4 years ago
//                                 </span>
//                               </time-ago>
//                             </div>
//                           </div>
//                         </user-badge-and-timestamp>

//                         <a
//                           className="comment-reason"
//                           target="_blank"
//                           rel="noreferrer"
//                           ng-href="https://genius.com/8846441/Genius-how-genius-works/More-on-annotations"
//                           ng-if="comment.reason"
//                           href="https://genius.com/8846441/Genius-how-genius-works/More-on-annotations"
//                         >
//                           Marked this as
//                           <span className="comment-reason-title">
//                             missing something
//                           </span>
//                         </a>

//                         <standard-rich-content
//                           html="comment.body.html"
//                           ng-show="!!comment.body.html"
//                           className=""
//                         >
//                           <div
//                             ng-className="{
//     'article_rich_text_formatting': variants.article,
//     'rich_text_formatting': !variants.article,
//     'rich_text_formatting--large': variants.isLarge,
//     'rich_text_formatting--no_vertical_margins': variants.no_vertical_margins,
//   }"
//                             ng-bind-html="trusted_html"
//                             embedly=""
//                             className="rich_text_formatting"
//                           >
//                             <p>Kanye’s mother was buried in Marina del Ray.</p>
//                           </div>
//                         </standard-rich-content>

//                         <div ng-if="!is_removed()">
//                           <voting
//                             vote-total-clicked="toggle_voters()"
//                             type="comment"
//                             object="comment"
//                             on-unauthorized="ctrl.prompt_auth = true"
//                             variants="{'hide_upvote_text': true}"
//                           >
//                             <div className="voting">
//                               <div
//                                 className="voting-button voting-upvote square_button square_button--transparent square_button--depress_on_click"
//                                 ng-className="{'voting-upvote--active': voteable.current_user_metadata.interactions.vote === 'up'}"
//                                 ng-click="ctrl.submit_vote('up')"
//                               >
//                                 <svg
//                                   className="inline_icon inline_icon--reading_size inline_icon--up_1"
//                                   src="thumbs_up.svg"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   viewBox="0 0 21.62 21.36"
//                                 >
//                                   <path d="M16.52 21.29H6V8.5l.84-.13a3.45 3.45 0 0 0 1.82-1.09 13.16 13.16 0 0 0 .82-1.85c1.06-2.69 2-4.78 3.52-5.31a2.06 2.06 0 0 1 1.74.17c2.5 1.42 1 5 .16 6.95-.11.27-.25.6-.31.77a.78.78 0 0 0 .6.36h4.1a2.29 2.29 0 0 1 2.37 2.37c0 .82-1.59 5.4-2.92 9.09a2.39 2.39 0 0 1-2.22 1.46zm-8.52-2h8.56a.48.48 0 0 0 .31-.17c1.31-3.65 2.73-7.82 2.79-8.44 0-.22-.1-.32-.37-.32h-4.1A2.61 2.61 0 0 1 12.54 8 4.29 4.29 0 0 1 13 6.46c.45-1.06 1.64-3.89.7-4.43-.52 0-1.3 1.4-2.38 4.14a10 10 0 0 1-1.13 2.38A5.28 5.28 0 0 1 8 10.11zM0 8.4h4.86v12.96H0z"></path>
//                                 </svg>
//                               </div>
//                               <div
//                                 ng-if="voteable.has_voters"
//                                 className="voting-total square_button square_button--transparent voting-total--positive"
//                                 ng-className="{
//       'voting-total--positive': voteable.votes_total > 0,
//       'voting-total--negative': voteable.votes_total < 0,
//       'voting-total--animate_press': !!voteable.current_user_metadata.interactions.vote
//     }"
//                                 ng-click="voteTotalClicked()"
//                               >
//                                 +6
//                               </div>
//                               <div
//                                 ng-if="!variants.hide_downvote"
//                                 className="voting-button voting-downvote square_button square_button--transparent square_button--depress_on_click"
//                                 ng-className="{'voting-downvote--active': voteable.current_user_metadata.interactions.vote === 'down'}"
//                                 ng-click="ctrl.submit_vote('down')"
//                               >
//                                 <svg
//                                   className="inline_icon inline_icon--reading_size inline_icon--up_1"
//                                   src="thumbs_down.svg"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   viewBox="0 0 21.62 21.36"
//                                 >
//                                   <path d="M8 21.36a2.12 2.12 0 0 1-1.06-.29c-2.5-1.42-1-5-.16-6.95.11-.27.25-.6.31-.77a.78.78 0 0 0-.6-.36H2.37A2.29 2.29 0 0 1 0 10.64c0-.82 1.59-5.4 2.92-9.09A2.39 2.39 0 0 1 5.1.07h10.56v12.79l-.84.13A3.45 3.45 0 0 0 13 14.08a13.16 13.16 0 0 0-.82 1.85c-1.06 2.69-2 4.79-3.49 5.31a2.06 2.06 0 0 1-.69.12zM5.1 2.07a.48.48 0 0 0-.31.17C3.48 5.89 2.07 10.06 2 10.68c0 .22.1.32.37.32h4.1a2.61 2.61 0 0 1 2.61 2.4 4.29 4.29 0 0 1-.48 1.51c-.46 1.09-1.65 3.89-.7 4.42.52 0 1.3-1.4 2.38-4.14a10 10 0 0 1 1.13-2.38 5.27 5.27 0 0 1 2.25-1.56V2.07zM16.76 0h4.86v12.96h-4.86z"></path>
//                                 </svg>
//                               </div>
//                             </div>
//                           </voting>

//                           <div className="u-float_right"></div>
//                         </div>
//                       </div>
//                     </comment>
//                   </div>
//                 </comment-list>
//               </div>
//             </comments>

//             <dfp-ad
//               ng-if="variants.showAd &amp;&amp; !ctrl.annotation_is_being_created_by_someone_else()"
//               name="desktop_song_annotation"
//               ad-classes="['dfp_unit--in_read u-top_margin']"
//               instance-id="annotation_8664200"
//             ></dfp-ad>
//           </annotation>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnnotationSidebar;
