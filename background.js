/*
 * This file is part of Google-4-TbSync.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 */

async function main() {
    await messenger.BootstrapLoader.registerChromeUrl([ 
        [
            "content",
            "google4tbsync",
            "content/"
        ],
        [
            "resource",
            "google4tbsync",
            "."
        ],
    ]);
    await messenger.BootstrapLoader.registerBootstrapScript("chrome://google4tbsync/content/bootstrap.js");  
}

main();