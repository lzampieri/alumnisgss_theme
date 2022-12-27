cd blocks & ^
npm run build & ^
cd .. & ^
npm run prod & ^
rmdir alumnisgss_theme /s /q & ^
del alumnisgss_theme.zip & ^
robocopy . alumnisgss_theme /s /xd *node_modules* /xd *.git* /xf *.json /xf *.bat /xf safelist.txt /xf tailwind.config.js /xf theme.js /xf webpack.*.js /xd alumnisgss_theme /xd src /xf *.jsx /xf .babelrc & ^
tar -acf alumnisgss_theme.zip alumnisgss_theme & ^
rmdir alumnisgss_theme /s /q