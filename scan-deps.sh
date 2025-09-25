#!/bin/bash

# A script to scan package-lock.json and yarn.lock files for a list of forbidden packages.
# It checks all dependencies (including transitive ones) listed in the lockfiles.

set -u # Treat unset variables as an error.

# --- Configuration ---
# List of forbidden packages. Add or remove packages as needed.
# Each entry is a package name without the version.
FORBIDDEN_PACKAGES=(
    "@ahmedhfarag/ngx-perfect-scrollbar"
    "@ahmedhfarag/ngx-virtual-scroller"
    "@art-ws/common"
    "@art-ws/config-eslint"
    "@art-ws/config-ts"
    "@art-ws/db-context"
    "@art-ws/di-node"
    "@art-ws/di"
    "@art-ws/eslint"
    "@art-ws/fastify-http-server"
    "@art-ws/http-server"
    "@art-ws/openapi"
    "@art-ws/package-base"
    "@art-ws/prettier"
    "@art-ws/slf"
    "@art-ws/ssl-info"
    "@art-ws/web-app"
    "@crowdstrike/commitlint"
    "@crowdstrike/falcon-shoelace"
    "@crowdstrike/foundry-js"
    "@crowdstrike/glide-core"
    "@crowdstrike/logscale-dashboard"
    "@crowdstrike/logscale-file-editor"
    "@crowdstrike/logscale-parser-edit"
    "@crowdstrike/logscale-search"
    "@crowdstrike/tailwind-toucan-base"
    "@ctrl/deluge"
    "@ctrl/golang-template"
    "@ctrl/magnet-link"
    "@ctrl/ngx-codemirror"
    "@ctrl/ngx-csv"
    "@ctrl/ngx-emoji-mart"
    "@ctrl/ngx-rightclick"
    "@ctrl/qbittorrent"
    "@ctrl/react-adsense"
    "@ctrl/shared-torrent"
    "@ctrl/tinycolor"
    "@ctrl/torrent-file"
    "@ctrl/transmission"
    "@ctrl/ts-base32"
    "@hestjs/core"
    "@hestjs/cqrs"
    "@hestjs/demo"
    "@hestjs/eslint-config"
    "@hestjs/logger"
    "@hestjs/scalar"
    "@hestjs/validation"
    "@nativescript-community/arraybuffers"
    "@nativescript-community/gesturehandler"
    "@nativescript-community/perms"
    "@nativescript-community/sentry"
    "@nativescript-community/sqlite"
    "@nativescript-community/text"
    "@nativescript-community/typeorm"
    "@nativescript-community/ui-collectionview"
    "@nativescript-community/ui-document-picker"
    "@nativescript-community/ui-drawer"
    "@nativescript-community/ui-image"
    "@nativescript-community/ui-label"
    "@nativescript-community/ui-material-bottom-navigation"
    "@nativescript-community/ui-material-bottomsheet"
    "@nativescript-community/ui-material-core-tabs"
    "@nativescript-community/ui-material-core"
    "@nativescript-community/ui-material-ripple"
    "@nativescript-community/ui-material-tabs"
    "@nativescript-community/ui-pager"
    "@nativescript-community/ui-pulltorefresh"
    "@nexe/config-manager"
    "@nexe/eslint-config"
    "@nexe/logger"
    "@nstudio/angular"
    "@nstudio/focus"
    "@nstudio/nativescript-checkbox"
    "@nstudio/nativescript-loading-indicator"
    "@nstudio/ui-collectionview"
    "@nstudio/web-angular"
    "@nstudio/web"
    "@nstudio/xplat-utils"
    "@nstudio/xplat"
    "@operato/board"
    "@operato/data-grist"
    "@operato/graphql"
    "@operato/headroom"
    "@operato/help"
    "@operato/i18n"
    "@operato/input"
    "@operato/layout"
    "@operato/popup"
    "@operato/pull-to-refresh"
    "@operato/shell"
    "@operato/styles"
    "@operato/utils"
    "@rxap/ngx-bootstrap"
    "@teriyakibomb/ember-velcro"
    "@teselagen/bio-parsers"
    "@teselagen/bounce-loader"
    "@teselagen/file-utils"
    "@teselagen/liquibase-tools"
    "@teselagen/ove"
    "@teselagen/range-utils"
    "@teselagen/react-list"
    "@teselagen/react-table"
    "@teselagen/sequence-utils"
    "@teselagen/ui"
    "@thangved/callback-window"
    "@things-factory/attachment-base"
    "@things-factory/auth-base"
    "@things-factory/email-base"
    "@things-factory/env"
    "@things-factory/integration-base"
    "@things-factory/integration-marketplace"
    "@things-factory/shell"
    "@tnf-dev/api"
    "@tnf-dev/core"
    "@tnf-dev/js"
    "@tnf-dev/mui"
    "@tnf-dev/react"
    "@ui-ux-gang/devextreme-angular-rpk"
    "@yoobic/design-system"
    "@yoobic/jpeg-camera-es6"
    "@yoobic/yobi"
    "airchief"
    "airpilot"
    "angulartics2"
    "another-shai"
    "browser-webdriver-downloader"
    "capacitor-notificationhandler"
    "capacitor-plugin-healthapp"
    "capacitor-plugin-ihealth"
    "capacitor-plugin-vonage"
    "capacitorandroidpermissions"
    "config-cordova"
    "cordova-plugin-voxeet2"
    "cordova-voxeet"
    "create-hest-app"
    "db-evo"
    "devextreme-angular-rpk"
    "ember-browser-services"
    "ember-headless-form-yup"
    "ember-headless-form"
    "ember-headless-table"
    "ember-url-hash-polyfill"
    "ember-velcro"
    "encounter-playground"
    "eslint-config-crowdstrike-node"
    "eslint-config-crowdstrike"
    "eslint-config-teselagen"
    "globalize-rpk"
    "graphql-sequelize-teselagen"
    "html-to-base64-image"
    "json-rules-engine-simplified"
    "jumpgate"
    "koa2-swagger-ui"
    "mcfly-semantic-release"
    "mcp-knowledge-base"
    "mcp-knowledge-graph"
    "mobioffice-cli"
    "monorepo-next"
    "mstate-angular"
    "mstate-cli"
    "mstate-dev-react"
    "mstate-react"
    "ng2-file-upload"
    "ngx-bootstrap"
    "ngx-color"
    "ngx-toastr"
    "ngx-trend"
    "ngx-ws"
    "oradm-to-gql"
    "oradm-to-sqlz"
    "ove-auto-annotate"
    "pm2-gelf-json"
    "printjs-rpk"
    "react-complaint-image"
    "react-jsonschema-form-conditionals"
    "react-jsonschema-form-extras"
    "react-jsonschema-rxnt-extras"
    "remark-preset-lint-crowdstrike"
    "rxnt-authentication"
    "rxnt-healthchecks-nestjs"
    "rxnt-kue"
    "swc-plugin-component-annotate"
    "tbssnch"
    "teselagen-interval-tree"
    "tg-client-query-builder"
    "tg-redbird"
    "tg-seq-gen"
    "thangved-react-grid"
    "ts-gaussian"
    "ts-imports"
    "tvi-cli"
    "ve-bamreader"
    "ve-editor"
    "verror-extra"
    "voip-callkit"
    "wdio-web-reporter"
    "yargs-help-output"
    "yoo-styles"
)

# --- Functions ---

function scan_lockfile() {
    local lockfile="$1"
    local found_count=0

    echo "---"
    echo "Scanning $lockfile..."

    if [ ! -f "$lockfile" ]; then
        echo "File not found. Skipping."
        return
    fi

    for pkg in "${FORBIDDEN_PACKAGES[@]}"; do
        # We use different patterns for each lockfile type for accuracy.
        local found=false
        if [[ "$lockfile" == "package-lock.json" ]]; then
            # For package-lock.json, packages are listed as keys like:
            # "node_modules/package-name": { ... }
            # "node_modules/@scope/package-name": { ... }
            # We search for the exact package name inside this structure.
            if grep -q -F "\"node_modules/${pkg}\"" "$lockfile"; then
                found=true
            fi
        elif [[ "$lockfile" == "yarn.lock" ]]; then
            # For yarn.lock, packages are listed at the start of a block, followed by '@':
            # "package-name@version":
            if grep -q -E "^\"?${pkg}@" "$lockfile"; then
                found=true
            fi
        fi

        if [ "$found" = true ]; then
            echo "  [FOUND] Forbidden package: $pkg"
            found_count=$((found_count + 1))
        fi
    done

    if [ "$found_count" -eq 0 ]; then
        echo "  No forbidden packages found in this file."
    else
        echo "  Found $found_count forbidden package(s)."
    fi
}

# --- Main Script ---

echo "Starting dependency scan for forbidden packages..."

scan_lockfile "package-lock.json"
scan_lockfile "yarn.lock"

echo "---"
echo "Scan complete."

exit 0
