       // Function to show the popup
       function showPopup(popupId, event) {
        var popup = document.getElementById(popupId);
        popup.style.display = 'block';

        // Calculate the position based on the icon's position
        var iconRect = event.target.getBoundingClientRect();
        popup.style.top = iconRect.bottom + 'px';
        popup.style.left = iconRect.left + 'px';
    }

    // Function to hide the popup
    function hidePopup(popupId) {
        var popup = document.getElementById(popupId);
        popup.style.display = 'none';
    }