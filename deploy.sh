git pull --ff-only
hugo --minify
PASSWORD=$(pass pot/kwander@porthan.osakunta.fi)
lftp -c "open -u kwander,$PASSWORD sftp://porthan.osakunta.fi; set ftp:ssl-allow yes; set ssl:verify-certificate no; mirror -R public /group/other/tanssikerho/public_html"
rm -r public
