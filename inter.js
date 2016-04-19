var Craig = new RiveScript();

// Load a list of files all at once (the best alternative to loadDirectory
// for the web!)
var talkToBot = function(message){
Craig.loadFile([
    "begin.rive",
    "craig.rive"
], loading_done, loading_error);

// All file loading operations are asynchronous, so you need handlers
// to catch when they've finished. If you use loadDirectory (or loadFile
// with multiple file names), the success function is called only when ALL
// the files have finished loading.
function loading_done (batch_num) {
    console.log("Batch #" + batch_num + " has finished loading!");

    // Now the replies must be sorted!
    Craig.sortReplies();

    // And now we're free to get a reply from the brain!
    var reply = Craig.reply("local-user", message);
    console.log("The bot says: " + reply);

}

// It's good to catch errors too!
function loading_error (batch_num, error) {
    console.log("Error when loading files: " + error);
}
}
