import React, { useEffect, useState } from 'react';
import css from './styles.module.scss';
import { Box, Button, Menu, MenuItem } from '@material-ui/core';
import { DownIcon, CheckIcon } from './assets/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const DropDown = ({
  className,
  title,
  items = [],
  onItemSelect,
  placeholder,
  selectFirstItem = false,
  whiteBackground = false,
  darkMode = false
}) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');

  const onSelect = (index, item) => {
    setMenuAnchor(null);
    setSelectedItem(item);
    onItemSelect(index, item);
  };

  const updateSelectedItem = () => {
    onItemSelect(0, items?.[0] || '');
    setSelectedItem(items?.[0] || '');
  };

  useEffect(() => {
    selectFirstItem && updateSelectedItem();
  }, []); //eslint-disable-line


  return (
    <Box className={classNames(css.DropDown, className)}>
      <Button
        className={classNames(css.Button, {
          [css.White]: whiteBackground,
        })}
        onClick={e => setMenuAnchor(e.currentTarget)}
      >
        {selectedItem || placeholder}
        <DownIcon />
      </Button>
      <Menu
        className={classNames(css.Menu, {
          [css.Dark]: darkMode
        })}
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{ className: css.MenuPaper }}
      >
        <MenuItem className={css.TitleMenuItem}>
          <span className={css.MenuTitle}>{title}</span>
        </MenuItem>
        {items?.length > 0 &&
          items.map((item, index) => (
            <MenuItem
              className={css.OtherMenuItem}
              key={index + '0'}
              onClick={() => onSelect(index, item)}
            >
              {item}
              {item === selectedItem && (
                <CheckIcon />
              )}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

DropDown.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onItemSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  selectFirstItem: PropTypes.bool,
  whiteBackground: PropTypes.bool,
  darkMode: PropTypes.bool,
};