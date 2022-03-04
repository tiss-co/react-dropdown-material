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
  darkMode = false,
  downIcon,
  startIcon,
  updateDropDown = { current: () => { } },
  allowDisable = true
}) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');

  const onSelect = (index, item) => {
    setSelectedItem(item);
    setMenuAnchor(null);
    onItemSelect(index, item);
  };

  const updateSelectedItem = (item = items?.[0] || '') => {
    onItemSelect(0, item);
    setSelectedItem(item);
  };

  updateDropDown.current = item => {
    updateSelectedItem(item);
  };

  useEffect(() => {
    selectFirstItem && updateSelectedItem();
  }, []); //eslint-disable-line


  return (
    <Box className={classNames(css.DropDown_DropDownMaterial, className)}>
      <Button
        className={classNames(css.Button_DropDownMaterial, {
          [css.White_DropDownMaterial]: whiteBackground,
        })}
        onClick={e => setMenuAnchor(e.currentTarget)}
        startIcon={startIcon}
        endIcon={downIcon || <DownIcon />}
      >
        {selectedItem || placeholder}
      </Button>
      <Menu
        className={classNames(css.Menu_DropDownMaterial, {
          [css.Dark_DropDownMaterial]: darkMode
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
        PaperProps={{ className: css.MenuPaper_DropDownMaterial }}
      >
        {
          title &&
          <MenuItem className={css.TitleMenuItem_DropDownMaterial}>
            <span className={css.MenuTitle_DropDownMaterial}>{title}</span>
          </MenuItem>
        }
        {items?.length > 0 &&
          items.map((item, index) => (
            <MenuItem
              className={css.OtherMenuItem_DropDownMaterial}
              key={index + '0'}
              onClick={() => onSelect(index,
                (selectedItem === item && allowDisable) ? null : item)}
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
  downIcon: PropTypes.object,
  startIcon: PropTypes.object,
  updateDropDown: PropTypes.shape({ current: PropTypes.func }),
  allowDisable: PropTypes.bool,
};