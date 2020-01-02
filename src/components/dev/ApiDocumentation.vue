<template>
    <div class="documentation">
        <h2>GETTERS</h2>
        <dl>
            <dt>getCourseTitle</dt>
            <dd>
                <p>Returns a String representing the course title.</p>
                <p class="example">this.$store.getters.getCourseTitle -> Simple Learning Framework</p>
            </dd>
        </dl>
        <dl>
            <dt>getPath</dt>
            <dd>
                <p>Returns a String representing the current path of the application stripped of the localization prefix.</p>
                <p class="example">this.$store.getters.getPath -> /page1</p>
            </dd>
        </dl>
        <dl>
            <dt>getLms</dt>
            <dd>
                <p>Returns the LmsCoupler object. Used to store LmsCoupler on the Window object for use on Window close</p>
                <p class="example">this.$store.getters.getLms -> {-LmsCoupler-}</p>
            </dd>
        </dl>
        <dl>
            <dt>isBookmarkAvailable</dt>
            <dd>
                <p>Returns the LmsCoupler object. Used to store LmsCoupler on the Window object for use on Window close</p>
                <p class="example">this.$store.getters.isBookmarkAvailable -> true</p>
            </dd>
        </dl>
        <dl>
            <dt>getDefaultLanguage</dt>
            <dd>
                <p>Returns a String representing the current localization prefix.</p>
                <p class="example">this.$store.getters.getDefaultLanguage -> /en</p>
            </dd>
        </dl>
        <dl>
            <dt>getAvailableLanguages</dt>
            <dd>
                <p>Returns an Array of objects representing the available languages in the course.</p>
                <p class="example">this.$store.getters.getAvailableLanguages -> [{name: 'English', code: 'en' },...]</p>
            </dd>
        </dl>
        <dl>
            <dt>getTransitionType</dt>
            <dd>
                <p>Returns a String representing the currently set transition for the main router-view.</p>
                <p class="example">this.$store.getters.getTransitionType -> slide-forward</p>
            </dd>
        </dl>
        <dl>
            <dt>getCompletionItem</dt>
            <dd>
                <p>Takes an Int representing the location of the completion item in the current page and returns a float between 0 and 1 representing the completion state of that completion item.</p>
                <p class="example">this.$store.getters.getCompletionItem(0) -> 1</p>
            </dd>
        </dl>
        <dl>
            <dt>getCompletionItems</dt>
            <dd>
                <p>Returns an Array of floats between 0 and 1 representing the completion state of each completion item on the current page.</p>
                <p class="example">this.$store.getters.getCompletionItems -> [1,0,0]</p>
            </dd>
        </dl>
        <dl>
            <dt>getPageCompletion</dt>
            <dd>
                <p>Takes an optional argument of a page's path as a String. Returns a float between 0 and 1 representing the completion state of the page. If a page path is omitted as an argument then the completion state of the current page is returned.</p>
                <p class="example">this.$store.getters.getPageCompletion('/page1') -> 0.5</p>
            </dd>
        </dl>
        <dl>
            <dt>getPagesCompletion</dt>
            <dd>
                <p>Returns a float between 0 and 1 representing the combined completion of all course pages.</p>
                <p class="example">this.$store.getters.getPagesCompletion -> 0.125</p>
            </dd>
        </dl>
        <dl>
            <dt>getGroupCompletion</dt>
            <dd>
                <p>Takes the title of a group and returns a float between 0 and 1 representing the combined completion of all course pages in the group.</p>
                <p class="example">this.$store.getters.getGroupCompletion('Chapter1') -> 0.125</p>
            </dd>
        </dl>
        <dl>
            <dt>getCourseCompletion</dt>
            <dd>
                <p>Returns a Boolean value representing the completion state of the course.</p>
                <p class="example">this.$store.getters.getCourseCompletion -> false</p>
            </dd>
        </dl>
        <dl>
            <dt>getPage</dt>
            <dd>
                <p>Takes an optional page path and returns an Object representing the page. If the path argument is omitted then an Object representing the current page is returned.</p>
                <p class="example">this.$store.getters.getPage('/page1') -> {title: 'page1', path: '/page1', component: f en_Page1(), connections: []}</p>
            </dd>
        </dl>
        <dl>
            <dt>getPages</dt>
            <dd>
                <p>Returns an Array of all pages in the course for the defaultLanguage.</p>
                <p class="example">this.$store.getters.getPages -> [{title: 'page1', path: '/page1', component: f en_Page1(), connections: []},...]</p>
            </dd>
        </dl>
        <dl>
            <dt>getGroup</dt>
            <dd>
                <p>Takes the title of a group and returns a Object representing the group.</p>
                <p class="example">this.$store.getters.getGroup('Chapter1') -> {title: 'Chapter1', complete: false, pages: ['/page1', '/page2']}</p>
            </dd>
        </dl>
        <dl>
            <dt>getGroups</dt>
            <dd>
                <p>Takes a String and returns an Array of group Objects where the group.title contains the String.</p>
                <p class="example">this.$store.getters.getGroups('Chapter') -> [{title: 'Chapter1', complete: false, pages: ['/page1', '/page2']}, {title: 'Chapter2', complete: false, pages: ['/page3', '/page4']}]</p>
            </dd>
        </dl>
        <dl>
            <dt>getGroupPages</dt>
            <dd>
                <p>Takes the title of a group and returns a Array of page Objects contained by the group.</p>
                <p class="example">this.$store.getters.getGroupPages('Chapter1') -> [{title: 'page1', path: '/page1', component: f en_Page1(), connections: []}, {title: 'page2', path: '/page2', component: f en_Page2(), connections: []}]</p>
            </dd>
        </dl>
        <dl>
            <dt>getGroupsPages</dt>
            <dd>
                <p>Takes a String and returns an Array of Arrays containing page Objects for each matched group.</p>
                <p class="example">this.$store.getters.getGroupsPages('Chapter') -> [[{title: 'page1', path: '/page1', component: f en_Page1(), connections: []}, {title: 'page2', path: '/page2', component: f en_Page2(), connections: []}], [{title: 'page3', path: '/page3', component: f en_Page3(), connections: []}, {title: 'page4', path: '/page4', component: f en_Page4(), connections: []}]]</p>
            </dd>
        </dl>
        <dl>
            <dt>getGroupOfPage</dt>
            <dd>
                <p>Takes a String to use to filter by group.title, and returns the first group.title where the current page is contained in that group.</p>
                <p class="example">this.$store.getters.getGroupOfPage('Chapter') -> 'Chapter2'</p>
            </dd>
        </dl>
        <dl>
            <dt>getIgnoreGating</dt>
            <dd>
                <p>Returns a Boolean value representing ignoreGating setting.</p>
                <p class="example">this.$store.getters.getIgnoreGating -> false</p>
            </dd>
        </dl>
        <dl>
            <dt>getOverrideTransition</dt>
            <dd>
                <p>Returns a Boolean value representing overrideTransition setting.</p>
                <p class="example">this.$store.getters.getOverrideTransition -> false</p>
            </dd>
        </dl>
        <dl>
            <dt>getPageConnections</dt>
            <dd>
                <p>Takes an optional argument of a page's path as a String. Returns an Array of connection Objects representing the connections for that page. If a page path is omitted as an argument then the current pages connections are returned.</p>
                <p class="example">this.$store.getters.getPageConnections('/page1') -> [{path: '/page2', gate: '', backwardTransition: 'slide-back', forwardTransition: 'slide-forward'}]</p>
            </dd>
        </dl>
        <dl>
            <dt>getPageConnectionsAsPages</dt>
            <dd>
                <p>Takes an optional argument of a page's path as a String. Returns an Array of page Objects representing the connections for that page. If a page path is omitted as an argument then the current pages connections are returned.</p>
                <p class="example">this.$store.getters.getPageConnectionsAsPages('/page1') -> [{title: 'page2', path: '/page2', component: f en_Page2(), connections: []}]</p>
            </dd>
        </dl>
        <h2>ACTIONS</h2>
        <dl>
            <dt>navByPath</dt>
            <dd>
                <p>Takes an argument of a page's path as a String. Searches the connection data to determine if navigation is gated, sets the corresponding transition, and navigates to the new page if allowed.</p>
                <p class="example">this.$store.dispatch('navByPath', '/page1')</p>
            </dd>
        </dl>
        <dl>
            <dt>navByConnection</dt>
            <dd>
                <p>Takes an argument of an Int representing one of the pages connections. Searches the connection data to determine if navigation is gated, sets the corresponding transition, and navigates to the new page if allowed.</p>
                <p class="example">this.$store.dispatch('navByConnection', 0)</p>
            </dd>
        </dl>
        <dl>
            <dt>navByGroup</dt>
            <dd>
                <p>Takes a String argument representing a group Title. Searches the connection and group data to determine if navigation is gated, sets the corresponding transition, and navigates to the first incomplete page of the group. If all pages are complete then the first page of the group is navigated to.</p>
                <p class="example">this.$store.dispatch('navByGroup', 'Chapter1')</p>
            </dd>
        </dl>
        <dl>
            <dt>navBack</dt>
            <dd>
                <p>Searches through the connection data and path history to smartly determine which page to navigate to. Sets the appropriate backwards transition and navigates to the determined page. In the edge case where a definitive page match can not be determined the course is navigated to the first of possible pages.</p>
                <p class="example">this.$store.dispatch('navBack', 'Chapter1')</p>
            </dd>
        </dl>
        <dl>
            <dt>setCourseCompletion</dt>
            <dd>
                <p>Sets the courses completion to true, fires the appropriate LMS calls. Note: This action should be used instead of the mutation _setCourseCompletion.</p>
                <p class="example">this.$store.dispatch('setCourseCompletion')</p>
            </dd>
        </dl>
        <dl>
            <dt>initPathHistory</dt>
            <dd>
                <p>Used on course startup to set the initial path.</p>
                <p class="example">this.$store.dispatch('initPathHistory', '/en')</p>
            </dd>
        </dl>
        <dl>
            <dt>closeCourse</dt>
            <dd>
                <p>Sends 'exit' command to the LMS and attempts to close the course window.</p>
                <p class="example">this.$store.dispatch('closeCourse')</p>
            </dd>
        </dl>
        <dl>
            <dt>loadStoredState</dt>
            <dd>
                <p>Gets the stored application state from the LMS (suspend data) and populates the store.</p>
                <p class="example">this.$store.dispatch('loadStoredState')</p>
            </dd>
        </dl>
        <dl>
            <dt>sendStoredState</dt>
            <dd>
                <p>Sends the current state of the course to the LMS for storage.</p>
                <p class="example">this.$store.dispatch('sendStoredState')</p>
            </dd>
        </dl>
        <dl>
            <dt>gotoBookmark</dt>
            <dd>
                <p>Navigates to the location bookmarked by the LMS.</p>
                <p class="example">this.$store.dispatch('gotoBookmark')</p>
            </dd>
        </dl>
        <dl>
            <dt>setCompletionItem</dt>
            <dd>
                <p>Takes a payload Object containing an index (Int), and a value (float between 0 and 1) and sets the completion of a completion item on the current page. Note: This action should be used instead of the mutation _setCompletionItem.</p>
                <p class="example">this.$store.dispatch('setCompletionItem', {index:0, value:1})</p>
            </dd>
        </dl>
        <dl>
            <dt>setPageCompletion</dt>
            <dd>
                <p>Takes an optional page path and sets the pages completion to 1 regardless of the state of it's completion items. If the optional page path is omitted then the currentPage is completed. Note: This action should be used instead of the mutation _setPageCompletion.</p>
                <p class="example">this.$store.dispatch('setPageCompletion', '/page1')</p>
            </dd>
        </dl>
        <dl>
            <dt>setDefaultPageCompletion</dt>
            <dd>
                <p>Called by the page component when mounted. Checks to see if the page has any completion items. If it does not, then the pages completion is set to 1.</p>
                <p class="example">this.$store.dispatch('setDefaultPageCompletion')</p>
            </dd>
        </dl>
        <dl>
            <dt>checkGroupCompletion</dt>
            <dd>
                <p>Takes a String representing a groups title. Determines whether the groups complete property is set to true. If yes and each of it's pages are complete, then course completion is triggered.</p>
                <p class="example">this.$store.dispatch('checkGroupCompletion', 'Chapter1')</p>
            </dd>
        </dl>
        <dl>
            <dt>setGroupCompletion</dt>
            <dd>
                <p>Takes a String representing a groups title and completes every page in the group regardless of each pages completion item status.</p>
                <p class="example">this.$store.dispatch('setGroupCompletion', 'Chapter1')</p>
            </dd>
        </dl>
        <h2>MUTATIONS</h2>
        <dl>
            <dt>setPathHistory</dt>
            <dd>
                <p>Appends a new path to the end of the historyPath Array in the store.</p>
                <p class="example">this.$store.commit('setGroupCompletion', '/page1')</p>
            </dd>
        </dl>
        <dl>
            <dt>setPathHistoryBack</dt>
            <dd>
                <p>Removes the last entry from the historyPath Array in the store. If the resulting historyPath Array is empty then the path of the page being navigated to is appended, so the array is never left empty.</p>
                <p class="example">this.$store.commit('setPathHistoryBack')</p>
            </dd>
        </dl>
        <dl>
            <dt>setDefaultLanguage</dt>
            <dd>
                <p>Takes a String representing a language localization and stores it as the default language. This string should start with a forward slash '/'. If it is missing it will be added automatically.</p>
                <p class="example">this.$store.commit('setDefaultLanguage', '/en')</p>
            </dd>
        </dl>
        <dl>
            <dt>setTransitionType</dt>
            <dd>
                <p>Sets the transition type that will be used on the next navigation</p>
                <p class="example">this.$store.commit('setTransitionType', 'cross-fade')</p>
            </dd>
        </dl>
        <dl>
            <dt>setIgnoreGating</dt>
            <dd>
                <p>Takes a Boolean and sets the ignoreGating property allowing for global toggling of navigation gating.</p>
                <p class="example">this.$store.commit('setIgnoreGating', true)</p>
            </dd>
        </dl>
        <dl>
            <dt>setOverrideTransition</dt>
            <dd>
                <p>Takes a Boolean and sets the overrideTransition property. This property makes the course ignore connection transitions and allows transitions to be controlled directly through the setTransitionType mutation.</p>
                <p class="example">this.$store.commit('setOverrideTransition', true)</p>
            </dd>
        </dl>
        <dl>
            <dt>_setCourseCompletion</dt>
            <dd>
                <p>This is an internal mutation and should not be used. Instead use the setCourseCompletion action</p>
            </dd>
        </dl>
        <dl>
            <dt>_setCompletionItem</dt>
            <dd>
                <p>This is an internal mutation and should not be used. Instead use the setCompletionItem action</p>
            </dd>
        </dl>
        <dl>
            <dt>_setPageCompletion</dt>
            <dd>
                <p>This is an internal mutation and should not be used. Instead use the setPageCompletion action</p>
            </dd>
        </dl>
        <dl>
            <dt>_setStoredCompletion</dt>
            <dd>
                <p>This is an internal mutation and should not be used. Instead use the setStoredState action</p>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
  name: 'api-documentation'
}
</script>

<style lang="scss" scoped>
.documentation{
    background: #ffffff;
    padding-top: 0.5rem;
    h2{
        margin-top: 1rem;
        margin-left: 1rem;
        margin-bottom: 0.5rem;
    }
    dl{
        width: 100%;
        dt{
            font-weight: bold;
            margin-left: 1rem;
        }
        dd{
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding-bottom: 0.5rem;
            p{
                margin-bottom: 0.25rem;
            }
            .example{
                background: #CCCCCC;
                padding: 0.25rem;
                font-style: italic;
            }
        }
    }

}
</style>
