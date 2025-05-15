// components/PopupCard.tsx
import React from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Text } from "react-native";

type PopupCardProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function PopupCard({ visible, onClose, children }: PopupCardProps) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.card}>
          {children}
          <View style={{flexDirection: 'row', width: '100%', gap: 15 }}>
            <TouchableOpacity onPress={onClose} style={[styles.closeButton, { flex: 1 }]}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={[styles.closeButton, { flex: 1 }]}>
              <Text style={styles.closeText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#00000099",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
  },
  closeText: {
    color: "#333",
    fontWeight: "600",
    fontSize: 16,
  },
});
