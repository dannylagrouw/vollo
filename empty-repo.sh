#!/bin/bash
snapshot_dirs=`find repo.vollo.nl/snapshots -name "*-SNAPSHOT" -print`
for snapshot_dir in $snapshot_dirs ; do
  echo "----$snapshot_dir"
  snapshot_files=`ls $snapshot_dir`

  last_version="0"
  for snapshot_file in $snapshot_files ; do
    if [[ $snapshot_file =~ ^.*-([0-9]+)\..+ ]] ; then
      version="${BASH_REMATCH[1]}"
      if [[ $version -gt $last_version ]] ; then
        last_version=$version
      fi
    fi
  done
  echo Last version is $last_version

  for snapshot_file in $snapshot_files ; do
    if [[ $snapshot_file =~ ^.*-([0-9]+)\..+ ]] ; then
      version="${BASH_REMATCH[1]}"
      if [[ $version -lt $last_version ]] ; then
        echo Removing $snapshot_file
        rm $snapshot_dir/$snapshot_file
      fi
    fi
  done
done
